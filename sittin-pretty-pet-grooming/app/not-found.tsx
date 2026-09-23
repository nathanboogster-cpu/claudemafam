import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NotFoundContent } from "@/components/NotFoundContent";

// Root not-found: the only file Next uses for URLs that match no route at
// all. It renders in the root layout, which has no site chrome, so the
// header and footer are added here to keep a dead link on-brand.
export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <NotFoundContent />
      </main>
      <Footer />
    </>
  );
}
