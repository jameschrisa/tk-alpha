import { Page } from "../components/Page";
import { PageProps } from "../types/page";

export const OtherSearchPage = ({ onNavigate }: { onNavigate: (targetPage: string) => void }) => {
  const pageProps: PageProps = {
    metadata: {
      pageId: "other-search",
      controlIds: ["back", "upload"],
    },
    content: {
      breadcrumbs: ["Start", "Begin Data Collection", "Threat Maker", "Safety Considerations", "KTM", "Social Media", "Other"],
      title: "Other Platform Search",
      legalText: (
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg text-sm">
            <h3 className="font-medium mb-4">Additional Platform Search Guide:</h3>
            <p className="mb-4">Search for presence on other social media platforms and online communities. Cross-reference usernames and patterns across platforms.</p>
            
            <h3 className="font-medium mb-2">Common Platforms to Check:</h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Reddit - Forums and community discussions</li>
              <li>LinkedIn - Professional profiles and connections</li>
              <li>Twitch - Live streaming and chat interactions</li>
              <li>Pinterest - Shared content and boards</li>
              <li>Telegram - Public channels and groups</li>
            </ul>

            <h3 className="font-medium mb-2">Search Tips:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Look for consistent username patterns</li>
              <li>Check profile creation dates</li>
              <li>Document any cross-platform connections</li>
              <li>Review public activity and interactions</li>
              <li>Note any platform-specific behaviors</li>
            </ul>

            <p className="mt-4">Note: Different platforms may require different search strategies. Document all findings systematically.</p>
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
