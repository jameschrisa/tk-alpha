import { Page } from "../components/Page";
import { PageProps } from "../types/page";
import { Search } from "lucide-react";
import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";
import { useState } from "react";

export const GoogleSearchPage = ({ onNavigate }: { onNavigate: (targetPage: string) => void }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pageProps: PageProps = {
    metadata: {
      pageId: "google-search",
      controlIds: ["back", "continue"],
    },
    content: {
      breadcrumbs: ["Start", "Begin Data Collection", "Threat Maker", "Safety Considerations", "KTM", "Google Search"],
      title: "Google Searching",
      headerAction: (
        <button
          onClick={() => setIsDrawerOpen(true)}
          className="text-[#10B981] hover:text-[#059669] border border-[#10B981] hover:border-[#059669] px-4 py-2 rounded-lg text-sm font-medium"
        >
          Search Tips
        </button>
      ),
      legalText: (
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <Search className="w-6 h-6 text-gray-400 flex-shrink-0 mt-1" />
            <div className="space-y-4 w-full">
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
                <div className="mt-8 border-t pt-8">
                  <div className="flex flex-col items-center text-center">
                    <h3 className="text-lg font-semibold mb-2">Need more precise search options?</h3>
                    <p className="text-gray-600 mb-6">Use our advanced search tool to refine your search criteria</p>
                    <button
                      onClick={() => onNavigate("advanced-search")}
                      className="bg-[#10B981] hover:bg-[#059669] text-white font-medium px-12 py-4 rounded-lg flex items-center gap-2 text-lg"
                    >
                      <Search className="w-6 h-6" />
                      Run Advanced Search
                    </button>
                  </div>
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

  return (
    <>
      <Page {...pageProps} onNavigate={onNavigate} />
      <Modal 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)}
        hideCloseButton
        size="2xl"
      >
        <ModalContent>
          <ModalHeader className="flex items-center justify-between">
            <span>Boolean Search Operators</span>
            <button 
              onClick={() => setIsDrawerOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              ✕
            </button>
          </ModalHeader>
          <ModalBody className="p-6">
            <p className="text-gray-700">
              Boolean search operators are essential for refining and narrowing down your Google search results. 
              These operators help you filter out irrelevant information and focus on the most pertinent data. 
              Here are the key operators and how to use them:
            </p>
            
            <div className="space-y-4 mt-4">
              <div>
                <h4 className="font-semibold mb-2">Quotation Marks</h4>
                <p className="text-gray-700">
                  Use quotation marks around exact phrases to search for specific language or names. 
                  This ensures that Google only returns results that contain the exact words in the order you specify.
                </p>
                <p className="mt-2 text-gray-600 bg-gray-100 p-2 rounded">
                  Example: "kill people burn shit fuck school" will return results containing that exact phrase.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">AND Operator</h4>
                <p className="text-gray-700">
                  This operator ensures that your search results include multiple terms. 
                  Use this to combine search phrases and get results that contain all of the specified terms.
                </p>
                <p className="mt-2 text-gray-600 bg-gray-100 p-2 rounded">
                  Example: "school name" AND threat OR lockdown OR bomb OR shoot will return results containing 
                  the school name and any one of the terms 'threat', 'lockdown', 'bomb', or 'shoot'.
                </p>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
