import { useState } from "react";
import { Page } from "../components/Page";
import { PageProps } from "../types/page";
import { Users } from "lucide-react";
import { Select, SelectItem } from "@nextui-org/react";

const PLATFORMS = [
  "Facebook",
  "Instagram",
  "X",
  "TikTok",
  "Snapchat",
  "Discord",
  "YouTube",
  "Other"
] as const;

export const SocialMediaAccountsPage = ({ onNavigate }: { onNavigate: (targetPage: string) => void }) => {
  const [selectedPlatform, setSelectedPlatform] = useState<string>("");

  const handlePlatformChange = (platform: string | number | boolean) => {
    if (typeof platform !== 'string') return;
    setSelectedPlatform(platform);
  };

  const getTargetPage = () => {
    if (!selectedPlatform) return "";
    return `${selectedPlatform.toLowerCase()}-search`;
  };

  const pageProps: PageProps = {
    metadata: {
      pageId: "social-media",
      controlIds: ["back", "upload"],
    },
    content: {
      breadcrumbs: [
        { label: "Start", onClick: () => onNavigate("terms") },
        { label: "Begin Data Collection", onClick: () => onNavigate("data-collection") },
        { label: "Threat Maker", onClick: () => onNavigate("threat-maker") },
        { label: "Safety Considerations", onClick: () => onNavigate("safety-considerations") },
        { label: "KTM", onClick: () => onNavigate("known-threat-maker") },
        { label: "Social Media" }
      ],
      title: "Social Media Accounts",
      headerAction: (
        <button
          onClick={() => {/* TODO: Add learn more modal */}}
          className="text-[#10B981] hover:text-[#059669] border border-[#10B981] hover:border-[#059669] px-4 py-2 rounded-lg text-sm font-medium"
        >
          Learn More
        </button>
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
                <Select
                  selectedKeys={selectedPlatform ? [selectedPlatform] : []}
                  onSelectionChange={(keys) => handlePlatformChange([...keys][0])}
                  placeholder="Select Platform"
                  aria-label="Select social media platform"
                  className="max-w-xs"
                  variant="bordered"
                  classNames={{
                    trigger: "h-12 border-[#10B981] data-[hover=true]:border-[#059669] rounded-lg bg-white",
                    value: "text-gray-900",
                    base: "min-h-12",
                  }}
                >
                  {PLATFORMS.map(platform => (
                    <SelectItem key={platform} value={platform}>
                      {platform}
                    </SelectItem>
                  ))}
                </Select>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    controls: {
      alternativePages: [
        {
          controlId: "upload",
          label: "Continue",
          targetPage: getTargetPage(),
          className: "bg-[#0047CC] hover:bg-[#0037A1]",
          onClick: () => {
            if (selectedPlatform) {
              onNavigate(getTargetPage());
            }
          }
        },
        {
          controlId: "back",
          label: "Back",
          targetPage: "google-search",
          className: "bg-black hover:bg-gray-900"
        }
      ]
    },
  };

  return <Page {...pageProps} onNavigate={onNavigate} />;
};
