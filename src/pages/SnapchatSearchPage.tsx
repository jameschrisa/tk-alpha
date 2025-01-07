import { Page } from "../components/Page";
import { PageProps } from "../types/page";

export const SnapchatSearchPage = ({ onNavigate }: { onNavigate: (targetPage: string) => void }) => {
  const pageProps: PageProps = {
    metadata: {
      pageId: "snapchat-search",
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
        { label: "Snapchat" }
      ],
      title: "Snapchat Search",
      legalText: (
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg text-sm">
            <h3 className="font-medium mb-4">Snapchat Search Guide:</h3>
            <p className="mb-4">Search for usernames and public content on Snapchat. Stories and shared content can provide valuable insights.</p>
            
            <h3 className="font-medium mb-2">Search Tips:</h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Check public stories and shared content</li>
              <li>Review location-based snaps using Snap Map</li>
              <li>Document usernames and friend connections</li>
              <li>Look for cross-platform username patterns</li>
              <li>Save relevant content for documentation</li>
            </ul>

            <p className="mt-4">Note: Due to Snapchat's ephemeral nature, it's crucial to document any concerning content immediately.</p>
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
