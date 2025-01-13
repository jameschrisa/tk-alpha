import { Page } from "../components/Page";
import { PageProps } from "../types/page";
import { Info } from "lucide-react";

export const KnownThreatMakerPage = ({ onNavigate }: { onNavigate: (targetPage: string) => void }) => {
  const pageProps: PageProps = {
    metadata: {
      pageId: "known-threat-maker",
      controlIds: ["back", "has-username", "no-username"],
    },
    content: {
      breadcrumbs: [
        { label: "Start", onClick: () => onNavigate("terms") },
        { label: "Begin Data Collection", onClick: () => onNavigate("data-collection") },
        { label: "Threat Maker", onClick: () => onNavigate("threat-maker") },
        { label: "Safety Considerations", onClick: () => onNavigate("safety-considerations") },
        { label: "KTM" }
      ],
      title: "Known Threat Maker (KTM)",
      legalText: (
        <div className="flex gap-8">
          <div className="flex-1">
            <div className="flex items-start gap-4 mb-6">
              <Info className="w-6 h-6 text-gray-400 flex-shrink-0 mt-1" />
              <p className="font-medium">Do you have a username for the threat maker?</p>
            </div>
          </div>
          <div className="flex-1 space-y-6">
            <div>
              <h3 className="font-medium mb-2">Key Identifiers to Aid Your Scans:</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Full Name of SOC (first, middle, last)</li>
                <li>Usernames and Online Aliases</li>
                <li>Peer names</li>
                <li>Confirming ages of subjects involved</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2">What should get be gathering and look for?</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Access to the means</li>
                <li>Risk enhancers</li>
                <li>Protective factors</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    controls: {
      previousPage: "safety-considerations",
      alternativePages: [
        {
          controlId: "has-username",
          label: "Yes, I have one or more usernames",
          targetPage: "social-media"
        },
        {
          controlId: "no-username",
          label: "No, I need to search without a username",
          targetPage: "google-search"
        }
      ]
    },
  };

  return <Page {...pageProps} onNavigate={onNavigate} />;
};
