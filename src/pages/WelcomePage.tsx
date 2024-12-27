import { Page } from "../components/Page";
import { PageProps } from "../types/page";

export const WelcomePage = ({ onNavigate }: { onNavigate: (targetPage: string) => void }) => {
  const pageProps: PageProps = {
    metadata: {
      pageId: "terms",
      controlIds: ["agree"],
    },
    content: {
      title: "Terms of Use and Legal Disclaimer",
      legalText: (
        <div className="space-y-8">
          <p>
            Users are responsible for ensuring compliance with all applicable privacy laws and regulations when using this
            Toolkit.
          </p>

          <ul className="list-disc pl-5 space-y-2">
            <li>All data must be handled in accordance with relevant data protection standards</li>
            <li>Personal information must be protected and secured at all times</li>
            <li>Data retention policies must be followed</li>
          </ul>

          <div>
            <h3 className="text-lg font-semibold mb-2">Disclaimer of Warranties</h3>
            <p>This Toolkit is provided "as is" without any warranties, expressed or implied.</p>
          </div>

          <div className="bg-[#EEF6FF] p-6 rounded-lg">
            <h4 className="font-semibold mb-2">Important Notice</h4>
            <p>
              We do not warrant that the Toolkit will meet your requirements or that its operation will be uninterrupted or
              error-free.
            </p>
          </div>

          <div className="space-y-4">
            <p>
              By clicking 'Agree and Proceed', you acknowledge that you have read, understood, and agree to be bound by these
              Terms of Use.
            </p>
            <p className="text-red-600 font-medium">
              If you do not agree to these terms, you must not use this Toolkit.
            </p>
          </div>
        </div>
      ),
    },
    controls: {
      nextPage: "data-collection",
    },
  };

  return <Page {...pageProps} onNavigate={onNavigate} />;
};
