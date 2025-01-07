import { Page } from "../components/Page";
import { PageProps } from "../types/page";

export const DiscordSearchPage = ({ onNavigate }: { onNavigate: (targetPage: string) => void }) => {
  const pageProps: PageProps = {
    metadata: {
      pageId: "discord-search",
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
        { label: "Discord" }
      ],
      title: "Discord Search",
      legalText: (
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg text-sm">
            <h3 className="font-medium mb-4">Discord Search Guide:</h3>
            <p className="mb-4">Search for usernames and server activity on Discord. Message history and server memberships can provide important insights.</p>
            
            <h3 className="font-medium mb-2">Search Tips:</h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Document full username including discriminator (e.g., username#1234)</li>
              <li>Review server memberships and roles</li>
              <li>Check message history in public channels</li>
              <li>Look for connected accounts</li>
              <li>Note any shared servers or mutual connections</li>
            </ul>

            <h3 className="font-medium mb-2">Search Operators:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>from: [user] - Find messages from specific user</li>
              <li>has: [link/file/embed] - Find messages with attachments</li>
              <li>before: [date] - Find messages before date</li>
              <li>after: [date] - Find messages after date</li>
              <li>in: [channel] - Search in specific channel</li>
            </ul>

            <p className="mt-4">Note: Document any concerning server invites or connections for further investigation.</p>
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
