@AGENTS.md

# SOP: Vercel deployment rate limits

Our Vercel team ("Tongfluence") is on the Hobby plan, and every project shares
one daily deployment limit (100 deployments a day across the team). When a
commit status or deployment reads "Deployment rate limited — retry in 24
hours", or the Vercel bot comments "Resource is limited - try again in 24
hours (more than 100, code: "api-deployments-free-per-day")", that is a
billing limit, not a code failure.

How this repo deploys: one monorepo, several Next.js apps, one Vercel project
per app folder (Root Directory = the folder). Each app's `vercel.json` has an
`ignoreCommand` that skips the build unless its own folder changed, and all
but `tongfluence` set `"git": {"deploymentEnabled": {"claude/*": false}}`, so
`claude/*` branches don't build. The root `vercel.json` belongs to the repo-root
app and excludes every client folder.

| Folder | Vercel project | Commit status context |
|---|---|---|
| repo root (Pampered Puppies) | `pampered-puppies-site` | `Vercel – pampered-puppies-site` |
| `bark-and-bork-mobile-pet-spa/` | `bark-and-bork-mobile-pet-spa` | `Vercel – bark-and-bork-mobile-pet-spa` |
| `bow-wags/` | `bow-wags` | `Vercel – bow-wags` |
| `flos-happy-clipper/` | `flos-happy-clipper` | `Vercel – flos-happy-clipper` |
| `groomer-on-call/` | `groomer-on-call` | `Vercel – groomer-on-call` |
| `i-love-dogs/` | `i-love-dogs` | `Vercel – i-love-dogs` |
| `pet-spa-luxe/` | `pet-spa-luxe` | `Vercel – pet-spa-luxe` |
| `sittin-pretty-pet-grooming/` | `sittin-pretty-pet-grooming` | `Vercel – sittin-pretty-pet-grooming` |
| `sky-pet-grooming/` | `sky-pet-grooming` | `Vercel – sky-pet-grooming` |
| `tongfluence/` | `tongfluence` | `Vercel – tongfluence` |

`petssible` deploys from a different repo but shares the same team limit.
`Vercel Deployments – Tongfluence` is a team-level status, not a project.

1. Do not treat it as red CI. If every other check is green and the user asked
   for the merge, merge the PR anyway. Never push empty commits, revert, or
   close and reopen anything to unstick it.
2. Tell the user which Vercel projects were rate limited (the status context
   `Vercel – <project>` names the project, per the table above) and that those
   sites won't update until the limit resets.
3. Schedule the retry for the next day: if the `send_later` tool is available,
   schedule a check-in about 24 hours after the rate-limit status appeared,
   plus 15 minutes. Otherwise tell the user to ask again the next day.
4. When the retry fires: fetch `main` and check the latest deployment of each
   affected project. Use the Vercel MCP tools if they have access to the team's
   projects (as of Nov 2026 the connection sees the team but not its projects,
   and can't create or redeploy them); otherwise read the commit statuses on
   `main` and on the merged PR. If it deployed after the reset, there's nothing
   to do. If it's still not live, redeploy it with the Vercel MCP tools if
   allowed; otherwise ask the user to open that project's latest deployment in
   the Vercel dashboard and click ⋯ → Redeploy, naming each project. A redeploy
   of the latest `main` includes everything merged while the limit was in
   effect. If it's rate limited again, repeat from step 2.
5. Save quota while limited. When you can, hold changes that would trigger
   extra builds until the limit resets:
   - Any file outside the client folders (repo root, `app/`, `components/`,
     `lib/`, `scripts/`, `.github/`, this `CLAUDE.md`) builds
     `pampered-puppies-site`.
   - Pushes to `claude/*` branches still start a `tongfluence` build attempt,
     because `tongfluence/vercel.json` doesn't disable `claude/*`.
   - Batch several changes to one app into one merge instead of several.
