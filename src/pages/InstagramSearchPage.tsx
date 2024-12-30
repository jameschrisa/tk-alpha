import { Page } from "../components/Page";
import { PageProps } from "../types/page";

export const InstagramSearchPage = ({ onNavigate }: { onNavigate: (targetPage: string) => void }) => {
  const pageProps: PageProps = {
    metadata: {
      pageId: "instagram-search",
      controlIds: ["back", "upload"],
    },
    content: {
      breadcrumbs: ["Start", "Begin Data Collection", "Threat Maker", "Safety Considerations", "KTM", "Social Media", "Instagram"],
      title: "Instagram Search",
      legalText: (
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg text-sm">
            <h3 className="font-medium mb-4">Instagram Search Guide:</h3>
            <p className="mb-4">Search for profiles, hashtags, and locations on Instagram. Profile content and interactions can provide valuable insights.</p>
            
            <h3 className="font-medium mb-2">Search Tips:</h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Review profile information and bio links</li>
              <li>Check tagged photos and location check-ins</li>
              <li>Document story highlights and saved posts</li>
              <li>Look for connected accounts and mutual followers</li>
              <li>Note any recurring hashtags or locations</li>
            </ul>

            <h3 className="font-medium mb-2">Key Areas to Check:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Profile Posts - Main feed content and captions</li>
              <li>Stories - Current and highlighted stories</li>
              <li>Tagged Photos - Content tagged by others</li>
              <li>Following/Followers - Account connections</li>
              <li>Comments - Interaction patterns and tone</li>
            </ul>

            <p className="mt-4">Note: Document any concerning patterns in content or interactions for further analysis.</p>
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
