import { Page } from "../components/Page";
import { PageProps } from "../types/page";

export const TikTokSearchPage = ({ onNavigate }: { onNavigate: (targetPage: string) => void }) => {
  const pageProps: PageProps = {
    metadata: {
      pageId: "tiktok-search",
      controlIds: ["back", "upload"],
    },
    content: {
      breadcrumbs: ["Start", "Begin Data Collection", "Threat Maker", "Safety Considerations", "KTM", "Social Media", "TikTok"],
      title: "TikTok Search",
      legalText: (
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg text-sm">
            <h3 className="font-medium mb-4">TikTok Search Guide:</h3>
            <p className="mb-4">Search for accounts, hashtags, and trends on TikTok. Video content and interactions can provide valuable behavioral insights.</p>
            
            <h3 className="font-medium mb-2">Search Tips:</h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Review profile information and bio</li>
              <li>Check video content and captions</li>
              <li>Document comment history and interactions</li>
              <li>Look for linked social media accounts</li>
              <li>Note favorite sounds and hashtags</li>
            </ul>

            <h3 className="font-medium mb-2">Key Areas to Check:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Posted Videos - Content themes and messaging</li>
              <li>Liked Videos - Interests and engagement</li>
              <li>Comments - Interaction style and tone</li>
              <li>Following/Followers - Account connections</li>
              <li>Duets/Stitches - Collaborative content</li>
            </ul>

            <p className="mt-4">Note: Pay special attention to video captions, sounds used, and hashtag patterns.</p>
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
