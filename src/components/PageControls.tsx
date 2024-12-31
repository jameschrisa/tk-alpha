import { Button } from "@nextui-org/react";
import { PageControls as PageControlsType, PageMetadata, PageContent } from "../types/page";

interface PageControlsProps {
  controls: PageControlsType;
  onNavigate: (targetPage: string) => void;
  metadata: PageMetadata;
}

export const PageControls = ({ controls, onNavigate, metadata, content }: PageControlsProps & { content: PageContent }) => {
  const { nextPage, previousPage, alternativePages, onSubmit } = controls;
  const { breadcrumbs } = content;
  const isWelcomePage = metadata.pageId === "terms";
  const isThreatMakerPage = metadata.pageId === "threat-maker";
  const isSafetyPage = metadata.pageId === "safety-considerations";
  const isActionRequired = metadata.pageId === "action-required";
  const isKnownThreatMaker = metadata.pageId === "known-threat-maker";

  if (isActionRequired) {
    return (
      <div className="flex justify-between w-full mt-8">
        <Button
          className="bg-black hover:bg-gray-900 text-white font-medium px-8 h-12 rounded-lg"
          onPress={() => onNavigate(previousPage || "safety-considerations")}
          size="lg"
        >
          Back to Safety Considerations
        </Button>
        <Button
          className="bg-[#0047CC] hover:bg-[#0037A1] text-white font-medium px-8 h-12 rounded-lg"
          onPress={() => onNavigate("exit-session")}
          size="lg"
        >
          Exit Session
        </Button>
      </div>
    );
  }

  if (isSafetyPage) {
    return (
      <div className="flex justify-between w-full mt-8">
        <Button
          className="bg-black hover:bg-gray-900 text-white font-medium px-8 h-12 rounded-lg"
          onPress={() => onNavigate(previousPage || "threat-maker")}
          size="lg"
        >
          Back
        </Button>
        <Button
          className="bg-[#0047CC] hover:bg-[#0037A1] text-white font-medium px-8 h-12 rounded-lg"
          onPress={onSubmit}
          size="lg"
        >
          Submit Responses
        </Button>
      </div>
    );
  }

  if (metadata.pageId === "advanced-search" && alternativePages && alternativePages.length === 3) {
    return (
      <div className="flex justify-between w-full mt-8">
        <Button
          className={`${alternativePages[0].className || "bg-black hover:bg-gray-900"} text-white font-medium px-8 h-12 rounded-lg`}
          onPress={() => onNavigate(alternativePages[0].targetPage)}
          size="lg"
        >
          {alternativePages[0].label}
        </Button>
        <Button
          className={`${alternativePages[1].className || "bg-[#10B981] hover:bg-[#059669]"} text-white font-medium px-8 h-12 rounded-lg`}
          onPress={() => {
            if (alternativePages[1].onClick) {
              alternativePages[1].onClick();
            }
            onNavigate(alternativePages[1].targetPage);
          }}
          size="lg"
        >
          {alternativePages[1].label}
        </Button>
        <Button
          className={`${alternativePages[2].className || "bg-[#0047CC] hover:bg-[#0037A1]"} text-white font-medium px-8 h-12 rounded-lg`}
          onPress={() => onNavigate(alternativePages[2].targetPage)}
          size="lg"
        >
          {alternativePages[2].label}
        </Button>
      </div>
    );
  }

  // Handle social media platform pages
  if (metadata.pageId.endsWith("-search") && metadata.pageId !== "google-search" && metadata.pageId !== "advanced-search") {
    return (
      <div className="flex justify-between w-full mt-8">
        <Button
          className="bg-[#0047CC] hover:bg-[#0037A1] text-white font-medium px-8 h-12 rounded-lg flex-1 mr-4"
          onPress={() => onNavigate("social-media")}
          size="lg"
        >
          Return to Social Media Platforms
        </Button>
        <Button
          className="bg-[#10B981] hover:bg-[#059669] text-white font-medium px-8 h-12 rounded-lg flex-1"
          onPress={() => onNavigate("upload-screenshots")}
          size="lg"
        >
          Upload and Tag
        </Button>
      </div>
    );
  }

  if ((isKnownThreatMaker || metadata.pageId === "google-search" || metadata.pageId === "social-media") && alternativePages && alternativePages.length === 2) {
    return (
      <>
        <div className="flex justify-between w-full mt-8">
          <Button
            className={`${alternativePages[1].className || "bg-black hover:bg-gray-900"} text-white font-medium px-8 h-12 rounded-lg`}
            onPress={() => onNavigate(alternativePages[1].targetPage)}
            size="lg"
          >
            {alternativePages[1].label}
          </Button>
          <Button
            className={`${alternativePages[0].className || "bg-[#0047CC] hover:bg-[#0037A1]"} text-white font-medium px-8 h-12 rounded-lg`}
            onPress={() => onNavigate(alternativePages[0].targetPage)}
            size="lg"
          >
            {alternativePages[0].label}
          </Button>
        </div>
      </>
    );
  }

  if (isThreatMakerPage && alternativePages && alternativePages.length === 2) {
    return (
      <>
        <div className="flex justify-center gap-4 w-full mt-8">
          <Button
              className={`${alternativePages[0].className || "bg-[#10B981] hover:bg-[#059669]"} text-white font-medium px-8 h-12 rounded-lg`}
              onPress={() => onNavigate(alternativePages[0].targetPage)}
            size="lg"
          >
            Threat Maker is Known
          </Button>
          <Button
            className="bg-black hover:bg-gray-900 text-white font-medium px-8 h-12 rounded-lg"
            onPress={() => onNavigate(alternativePages[1].targetPage)}
            size="lg"
          >
            The Threat Maker is Unknown
          </Button>
        </div>
      </>
    );
  }

  const getButtonText = () => {
    if (isWelcomePage) {
      return "Agree and Proceed";
    }
    return "Continue with Collection and Analysis";
  };

  const getButtonStyle = () => {
    if (isWelcomePage) {
      return "bg-[#10B981] hover:bg-[#059669]";
    }
    return "bg-[#0047CC] hover:bg-[#0037A1]";
  };

  return (
    <>
      <div className="flex justify-center w-full mt-8">
        {nextPage && (
          <Button
            className={`${getButtonStyle()} text-white font-medium px-8 h-12 rounded-lg`}
            onPress={() => onNavigate(nextPage)}
            size="lg"
          >
            {getButtonText()}
          </Button>
        )}
      </div>
    </>
  );
};
