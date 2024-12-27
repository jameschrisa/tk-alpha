import { Page } from "../components/Page";
import { PageProps } from "../types/page";
import { Search } from "lucide-react";

export const GoogleSearchPage = ({ onNavigate }: { onNavigate: (targetPage: string) => void }) => {
  const pageProps: PageProps = {
    metadata: {
      pageId: "google-search",
      controlIds: ["back", "continue"],
    },
    content: {
      breadcrumbs: ["Start", "Begin Data Collection", "Threat Maker", "Safety Considerations", "KTM", "Google Search"],
      title: (
        <div className="flex items-center justify-between">
          <span>Google Searching</span>
          <button
            onClick={() => {/* TODO: Add search tips modal */}}
            className="text-[#10B981] hover:text-[#059669] border border-[#10B981] hover:border-[#059669] px-4 py-2 rounded-lg text-sm font-medium"
          >
            Search Tips
          </button>
        </div>
      ),
      legalText: (
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Search className="w-6 h-6 text-gray-400 flex-shrink-0 mt-1" />
            <div className="space-y-4">
              <div>
                <p className="mb-2">
                  <span className="font-medium">Boolean Search Operators</span> are important for narrowing down your Google search results.
                  Remember to use the following operators: Quotation mark, AND, NOT(-), OR. Cross reference names/usernames (exact spelling of usernames is important).
                </p>
                <p className="mb-4">
                  Do the same for the given name or and any nickname(s) of the SOC. If you are searching an anonymous threat, search the exact language of the threat.
                </p>
              </div>
              <div className="space-y-6">
                <div className="space-y-3">
                  <p>E.G. "kill people burn shit fuck school"</p>
                  <p>"school name" AND threat OR lockdown OR bomb OR shoot</p>
                  <p>"First Last"</p>
                  <p>"first last" -michigan</p>
                  <p>"user_name123"</p>
                  <p>"user_name123" instagram OR tiktok OR snapchat OR twitter</p>
                  <p>"First Last" AND "City"</p>
                </div>
                <div className="flex justify-end pt-4">
                  <button
                    onClick={() => {/* TODO: Add run search functionality */}}
                    className="bg-[#10B981] hover:bg-[#059669] text-white font-medium px-8 h-12 rounded-lg"
                  >
                    Run Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    controls: {
      alternativePages: [
        {
          controlId: "continue",
          label: "Username is found - Continue",
          targetPage: "social-media",
          className: "bg-[#0047CC] hover:bg-[#0037A1]"
        },
        {
          controlId: "back",
          label: "Back",
          targetPage: "known-threat-maker",
          className: "bg-black hover:bg-gray-900"
        }
      ]
    },
  };

  return <Page {...pageProps} onNavigate={onNavigate} />;
};
