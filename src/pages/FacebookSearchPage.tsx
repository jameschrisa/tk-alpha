import { Page } from "../components/Page";
import { PageProps } from "../types/page";

export const FacebookSearchPage = ({ onNavigate }: { onNavigate: (targetPage: string, platform?: string) => void }) => {
  const pageProps: PageProps = {
    metadata: {
      pageId: "facebook-search",
      controlIds: ["return", "upload", "save"],
    },
    content: {
      breadcrumbs: [
        { label: "Start", onClick: () => onNavigate("terms") },
        { label: "Begin Data Collection", onClick: () => onNavigate("data-collection") },
        { label: "Threat Maker", onClick: () => onNavigate("threat-maker") },
        { label: "Safety Considerations", onClick: () => onNavigate("safety-considerations") },
        { label: "KTM", onClick: () => onNavigate("known-threat-maker") },
        { label: "Social Media", onClick: () => onNavigate("social-media") },
        { label: "Facebook" }
      ],
      title: "Facebook Search",
      legalText: (
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium mb-3">General Search on Facebook:</h3>
                <p className="text-gray-600">
                  Search locations or key phrases to find public posts on Facebook. Facebook groups can contain a lot of data. 
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
              
              <div className="pt-4 border-t border-gray-200">
                <p className="text-gray-600">Facebook Law Enforcement Guide</p>
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
          onClick: () => onNavigate("tag-upload", "facebook")
        },
        {
          controlId: "save",
          label: "Save and Continue",
          targetPage: "social-media",
          className: "bg-[#10B981] hover:bg-[#059669]"
        }
      ]
    }
  };

  return <Page {...pageProps} onNavigate={onNavigate} />;
};
