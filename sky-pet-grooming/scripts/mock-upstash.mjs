// Minimal in-memory stand-in for the Upstash Redis REST API, for local QA of
// the booking form only. Supports just the commands lib/requests-store.ts
// uses. Never deploy this.
//
//   node scripts/mock-upstash.mjs            # listens on :8079
//   KV_REST_API_URL=http://localhost:8079 KV_REST_API_TOKEN=qa npx next start
import { createServer } from "node:http";

const PORT = Number(process.env.MOCK_UPSTASH_PORT ?? 8079);
const strings = new Map();
const lists = new Map();

function run([cmd, ...args]) {
  switch (String(cmd).toLowerCase()) {
    case "incr": {
      const n = Number(strings.get(args[0]) ?? 0) + 1;
      strings.set(args[0], String(n));
      return n;
    }
    case "expire":
      return 1;
    case "lpush": {
      const list = lists.get(args[0]) ?? [];
      for (const v of args.slice(1)) list.unshift(String(v));
      lists.set(args[0], list);
      return list.length;
    }
    case "ltrim": {
      const list = lists.get(args[0]) ?? [];
      lists.set(args[0], list.slice(Number(args[1]), Number(args[2]) + 1));
      return "OK";
    }
    case "lrange": {
      const list = lists.get(args[0]) ?? [];
      const end = Number(args[2]);
      return list.slice(Number(args[1]), end === -1 ? undefined : end + 1);
    }
    default:
      throw new Error(`mock-upstash: unsupported command ${cmd}`);
  }
}

// The client asks for base64-encoded string results (Upstash-Encoding header).
function encode(value, base64) {
  if (!base64) return value;
  if (typeof value === "string") return Buffer.from(value).toString("base64");
  if (Array.isArray(value)) return value.map((v) => encode(v, base64));
  return value;
}

createServer((req, res) => {
  let body = "";
  req.on("data", (c) => (body += c));
  req.on("end", () => {
    const base64 = req.headers["upstash-encoding"] === "base64";
    const send = (status, data) => {
      res.writeHead(status, { "Content-Type": "application/json" });
      res.end(JSON.stringify(data));
    };
    try {
      const parsed = JSON.parse(body);
      if (req.url.startsWith("/pipeline") || req.url.startsWith("/multi-exec")) {
        send(200, parsed.map((c) => ({ result: encode(run(c), base64) })));
      } else {
        send(200, { result: encode(run(parsed), base64) });
      }
    } catch (e) {
      send(400, { error: String(e.message ?? e) });
    }
  });
}).listen(PORT, () => console.log(`mock-upstash listening on :${PORT}`));
