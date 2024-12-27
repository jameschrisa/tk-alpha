import { Page } from "../components/Page";
import { PageProps } from "../types/page";

export const DataCollectionPage = ({ onNavigate }: { onNavigate: (targetPage: string) => void }) => {
  const pageProps: PageProps = {
    metadata: {
      pageId: "data-collection",
      controlIds: ["continue"],
    },
    content: {
      title: "Begin Data Collection",
      legalText: (
        <div className="space-y-6">
          <p>
            A significant piece of Digital Threat Assessment is identifying if the person of concern has publicly-viewable online content 
            consistent with the threat and/or access to weapons. To be able to determine the threat risk level, we must conduct online 
            scans of their digital content and online footprint to inform our threat assessment.
          </p>

          <p>
            Engaging in online open-source data collection utilizing social media platforms, blogs, forums, and the dark web is the 
            best practice for establishing a digital behavioral baseline. This often provides evidence of ideation and/or the 
            manifestation of a grievance or perceived injustice.
          </p>

          <p>
            Collecting and preserving evidence of the Subject of Concern's (SOC) digital baseline is key in ensuring all evidence is 
            documented as we go. We want to ensure we save this information as you may never know when the SOC may remove a 
            social media post.
          </p>

          <p>
            Once documented, review the information in a multidisciplinary team, recognizing that the online information needs to be 
            considered within a larger context.
          </p>

          <p>
            It is recommended that School Safety / Threat Assessment teams use dedicated social media accounts when needed as 
            personal accounts are never recommended.
          </p>
        </div>
      ),
    },
    controls: {
      previousPage: "terms",
      nextPage: "threat-maker",
    },
  };

  return <Page {...pageProps} onNavigate={onNavigate} />;
};
