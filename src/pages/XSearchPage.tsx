import { Page } from "../components/Page";
import { PageProps } from "../types/page";

export const XSearchPage = ({ onNavigate }: { onNavigate: (targetPage: string) => void }) => {
  const pageProps: PageProps = {
    metadata: {
      pageId: "x-search",
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
        { label: "X" }
      ],
      title: "X (Twitter) Search",
      legalText: (
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg text-sm">
            <h3 className="font-medium mb-4">X (Twitter) Search Guide:</h3>
            <p className="mb-4">Search for usernames, hashtags, and keywords on X. Timeline content and interactions can provide valuable context.</p>
            
            <h3 className="font-medium mb-2">Search Tips:</h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Use advanced search operators for precise results</li>
              <li>Review tweet history and interactions</li>
              <li>Check followers and following lists</li>
              <li>Document media content and replies</li>
              <li>Look for linked accounts in bio</li>
            </ul>

            <h3 className="font-medium mb-2">Advanced Search Operators:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>from:[username] - Find tweets from specific user</li>
              <li>to:[username] - Find replies to specific user</li>
              <li>since:[yyyy-mm-dd] - Find tweets after date</li>
              <li>until:[yyyy-mm-dd] - Find tweets before date</li>
              <li>near:[location] - Find tweets near location</li>
            </ul>
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
