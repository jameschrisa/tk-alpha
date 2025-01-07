import { Page } from "../components/Page";
import { PageProps } from "../types/page";

export const TikTokSearchPage = ({ onNavigate }: { onNavigate: (targetPage: string, platform?: string) => void }) => {
  const pageProps: PageProps = {
    metadata: {
      pageId: "tiktok-search",
      controlIds: ["return", "upload"],
    },
    content: {
      breadcrumbs: ["Start", "Begin Data Collection", "Threat Maker", "Safety Considerations", "KTM", "Social Media", "TikTok"],
      title: "TikTok Search",
      legalText: (
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium mb-3">General Search on TikTok:</h3>
                <p className="text-gray-600">
                  Search locations or key phrases to find public posts on TikTok. TikTok profiles can contain a lot of data. 
                  Check post history to establish a digital behavioral baseline.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-3">Targeted Search:</h3>
                <ul className="space-y-3 text-gray-600 list-disc pl-5">
                  <li>Search for the SOC's full name.</li>
                  <li>Add location or school filters to narrow search results.</li>
                  <li>Check post history to establish a digital behavioral baseline.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    controls: {
      alternativePages: [
        {
          controlId: "return",
          label: "Return to Social Media Platforms",
          targetPage: "social-media",
          className: "bg-[#0047CC] hover:bg-[#0037A1]"
        },
        {
          controlId: "upload",
          label: "Upload and Tag",
          targetPage: "tag-upload",
          className: "bg-[#10B981] hover:bg-[#059669]",
          onClick: () => onNavigate("tag-upload", "tiktok")
        }
      ]
    }
  };

  return <Page {...pageProps} onNavigate={onNavigate} />;
};
