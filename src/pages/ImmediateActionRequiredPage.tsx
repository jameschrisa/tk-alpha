import { Page } from "../components/Page";
import { PageProps } from "../types/page";
import { XCircle } from "lucide-react";

export const ImmediateActionRequiredPage = ({ onNavigate }: { onNavigate: (targetPage: string) => void }) => {
  const pageProps: PageProps = {
    metadata: {
      pageId: "action-required",
      controlIds: ["back", "exit"],
    },
    content: {
      title: "Immediate Action Required",
      legalText: (
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
            <div>
              <p className="font-medium mb-4">
                Based on your responses, it is advised that you should NOT continue with the Digital Threat Assessment Toolkit.
              </p>
              <div className="space-y-4">
                <p>Please focus on immediate risk-reducing interventions:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Notify law enforcement immediately</li>
                  <li>Secure the area to prevent access</li>
                  <li>Inform relevant stakeholders (e.g., school administrators, security personnel)</li>
                  <li>Activate your organization's emergency response plan</li>
                </ul>
                <p>
                  For more information, visit our Website.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    controls: {
      previousPage: "safety-considerations",
      alternativePages: [
        {
          controlId: "exit",
          targetPage: "exit-session"
        }
      ]
    },
  };

  return <Page {...pageProps} onNavigate={onNavigate} />;
};
