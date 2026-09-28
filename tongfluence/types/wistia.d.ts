import type React from "react";

// Type declaration for Wistia's <wistia-player> custom element so it can be
// used in JSX like any other element.
//
// Augmenting JSX.IntrinsicElements requires a namespace — that is the shape
// TypeScript defines it as, and there is no ES module equivalent. It lives in
// a declaration file rather than inline in the component so the no-namespace
// rule, which only covers source files, does not have to be suppressed.
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "wistia-player": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        "media-id": string;
        aspect?: string;
      };
    }
  }
}
