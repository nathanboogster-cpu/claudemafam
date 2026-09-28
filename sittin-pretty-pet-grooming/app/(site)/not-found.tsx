import { NotFoundContent } from "@/components/NotFoundContent";

// Handles notFound() thrown inside the (site) group (e.g. an unknown blog
// slug) and renders within the site layout. Unmatched URLs never reach a
// route group, so those are served by app/not-found.tsx instead.
export default function NotFound() {
  return <NotFoundContent />;
}
