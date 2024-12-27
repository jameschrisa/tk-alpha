import { PageProps } from "../types/page";
import { PageCard } from "./PageCard";
import { PageControls } from "./PageControls";
import SSTLogo from "../assets/sst-logo.svg";

interface BasePageProps extends PageProps {
  onNavigate: (targetPage: string) => void;
}

export const Page = ({ metadata, content, controls, onNavigate }: BasePageProps) => {
  const isWelcomePage = metadata.pageId === "terms";

  return (
    <div className={`min-h-screen p-4 sm:p-8 ${isWelcomePage ? "bg-[#0047CC]" : "bg-gray-100"}`}>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        {isWelcomePage && (
          <div className="text-center text-white space-y-6">
            <img src={SSTLogo} alt="SST Logo" className="h-12 mx-auto mb-6" />
            <div>
              <h1 className="text-4xl font-bold mb-4">Digital Threat Assessment® Toolkit</h1>
              <p className="text-xl">
                A comprehensive tool for conducting digital threat assessments and analyzing online behavior patterns.
              </p>
            </div>
          </div>
        )}

        {/* Hidden metadata for tracking */}
        <div className="hidden" aria-hidden="true">
          <span data-page-id={metadata.pageId} />
          {metadata.controlIds.map((id) => (
            <span key={id} data-control-id={id} />
          ))}
        </div>

        {!isWelcomePage && content.breadcrumbs && (
          <div className="mb-6">
            <div className="flex items-center gap-2 text-sm">
              {content.breadcrumbs.map((crumb, index) => (
                <div key={crumb} className="flex items-center">
                  {index === content.breadcrumbs!.length - 1 ? (
                    <span className="text-gray-900">{crumb}</span>
                  ) : (
                    <button
                      onClick={() => {
                        switch (index) {
                          case 0: // Start
                            onNavigate("terms");
                            break;
                          case 1: // Begin Data Collection
                            onNavigate("data-collection");
                            break;
                          case 2: // Threat Maker
                            onNavigate("threat-maker");
                            break;
                          case 3: // Safety Considerations
                            onNavigate("safety-considerations");
                            break;
                          case 4: // KTM
                            onNavigate("known-threat-maker");
                            break;
                        }
                      }}
                      className="text-blue-600 hover:text-blue-500"
                    >
                      {crumb}
                    </button>
                  )}
                  {index < content.breadcrumbs!.length - 1 && (
                    <span className="text-gray-400 mx-2">›</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        <div className={`${isWelcomePage ? "bg-[#0A1629]" : "bg-white border"} rounded-2xl p-8 ${!isWelcomePage && "shadow-2xl"}`}>
          <div className="p-2">
            <PageCard content={content} metadata={metadata} />
          </div>
        </div>
        
        <div className="space-y-4">
          <PageControls controls={controls} onNavigate={onNavigate} metadata={metadata} content={content} />
          {isWelcomePage && (
            <p className="text-center text-white text-sm mt-4">
              By clicking "Agree and Proceed", you acknowledge that you have read and agree to the terms above.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
