import { explainerVideo } from "@/lib/site-data";
import { WistiaPlayer } from "./WistiaPlayer";

// The homepage walkthrough. A thin wrapper so the page does not need to know
// the media id; loading, poster frame and tracking live in WistiaPlayer.
export function ExplainerVideo({ location }: { location: string }) {
  return (
    <WistiaPlayer
      mediaId={explainerVideo.wistiaMediaId}
      aspect={explainerVideo.aspectRatio}
      location={location}
      className="rounded-2xl shadow-sm"
    />
  );
}
