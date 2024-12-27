import { Page } from "../components/Page";
import { PageProps } from "../types/page";

export const ThreatMakerPage = ({ onNavigate }: { onNavigate: (targetPage: string) => void }) => {
  const pageProps: PageProps = {
    metadata: {
      pageId: "threat-maker",
      controlIds: ["known", "unknown"],
    },
    content: {
      title: "Threat Maker",
      legalText: (
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-lg">Was the person who made the threat identified?</p>
        </div>
      ),
    },
    controls: {
      previousPage: "data-collection",
      alternativePages: [
        {
          controlId: "known",
          targetPage: "safety-considerations"
        },
        {
          controlId: "unknown",
          targetPage: "unknown-maker"
        }
      ]
    },
  };

  return <Page {...pageProps} onNavigate={onNavigate} />;
};
