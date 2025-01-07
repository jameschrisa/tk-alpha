import { Page } from "../components/Page";
import { PageProps } from "../types/page";

export const YouTubeSearchPage = ({ onNavigate }: { onNavigate: (targetPage: string) => void }) => {
  const pageProps: PageProps = {
    metadata: {
      pageId: "youtube-search",
      controlIds: ["back", "upload"],
    },
    content: {
      breadcrumbs: [
        { label: "Start", onClick: () => onNavigate("terms") },
        { label: "Begin Data Collection", onClick: () => onNavigate("data-collection") },
        { label: "Threat Maker", onClick: () => onNavigate("threat-maker") },
        { label: "Safety Considerations", onClick: () => onNavigate("safety-considerations") },
        { label: "KTM", onClick: () => onNavigate("known-threat-maker") },
        { label: "Social Media", onClick: () => onNavigate("social-media") },
        { label: "YouTube" }
      ],
      title: "YouTube Search",
      legalText: (
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg text-sm">
            <h3 className="font-medium mb-4">YouTube Search Guide:</h3>
            <p className="mb-4">Search for channels, videos, and comments on YouTube. Video content and interaction history can provide valuable behavioral insights.</p>
            
            <h3 className="font-medium mb-2">Search Tips:</h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Review channel information and playlists</li>
              <li>Check video upload history</li>
              <li>Document comment history and interactions</li>
              <li>Look for linked social media accounts</li>
              <li>Note subscriptions and channel memberships</li>
            </ul>

            <h3 className="font-medium mb-2">Advanced Search Filters:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Channel: [channel name] - Find videos from specific channel</li>
              <li>before: [yyyy-mm-dd] - Find videos before date</li>
              <li>after: [yyyy-mm-dd] - Find videos after date</li>
              <li>playlist: [playlist ID] - Search within specific playlist</li>
              <li>location: [location] - Find videos from specific location</li>
            </ul>

            <p className="mt-4">Note: Pay special attention to video descriptions and pinned comments for additional context.</p>
          </div>
        </div>
      ),
    },
    controls: {
      alternativePages: [
        {
          controlId: "back",
          label: "Back",
          targetPage: "social-media",
          className: "bg-black hover:bg-gray-900"
        },
        {
          controlId: "upload",
          label: "Upload and Tag",
          targetPage: "upload-screenshots",
          className: "bg-[#0047CC] hover:bg-[#0037A1]"
        }
      ]
    },
  };

  return <Page {...pageProps} onNavigate={onNavigate} />;
};
