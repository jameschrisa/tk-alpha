import { useState } from "react";
import { Page } from "../components/Page";
import { PageProps } from "../types/page";
import { Users } from "lucide-react";

const PLATFORMS = [
  "Facebook",
  "Instagram",
  "X",
  "TikTok",
  "Snapchat",
  "Discord",
  "YouTube",
  "Other"
];

export const SocialMediaAccountsPage = ({ onNavigate }: { onNavigate: (targetPage: string) => void }) => {
  const [selectedPlatform, setSelectedPlatform] = useState<string>("");

  const pageProps: PageProps = {
    metadata: {
      pageId: "social-media",
      controlIds: ["back", "upload"],
    },
    content: {
      breadcrumbs: ["Start", "Begin Data Collection", "Threat Maker", "Safety Considerations", "KTM", "Social Media"],
      title: (
        <div className="flex items-center justify-between">
          <span>Social Media Accounts</span>
          <button
            onClick={() => {/* TODO: Add learn more modal */}}
            className="text-[#10B981] hover:text-[#059669] border border-[#10B981] hover:border-[#059669] px-4 py-2 rounded-lg text-sm font-medium"
          >
            Learn More
          </button>
        </div>
      ),
      legalText: (
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Users className="w-6 h-6 text-gray-400 flex-shrink-0 mt-1" />
            <div className="space-y-4">
              <h3 className="font-medium">Conduct scans through all social media accounts.</h3>
              <p className="text-gray-600">
                Collect social media usernames and comments if possible. Document and record threats including URL's, usernames and comments if possible.
              </p>
              <div className="space-y-2">
                <p>Click which platform you want to search.</p>
                <select
                  value={selectedPlatform}
                  onChange={(e) => setSelectedPlatform(e.target.value)}
                  className="w-full max-w-xs h-11 pl-4 pr-10 border border-[#10B981] text-[#10B981] bg-white appearance-none text-base rounded-lg"
                  style={{ 
                    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 0.75rem center',
                    backgroundSize: '1rem 1rem'
                  }}
                >
                  <option value="" disabled>Select Platform ▾</option>
                  {PLATFORMS.map(platform => (
                    <option key={platform} value={platform}>{platform}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    controls: {
      previousPage: "known-threat-maker",
      alternativePages: [
        {
          controlId: "upload",
          label: "Upload Screenshots",
          targetPage: "upload-screenshots"
        }
      ]
    },
  };

  return <Page {...pageProps} onNavigate={onNavigate} />;
};
