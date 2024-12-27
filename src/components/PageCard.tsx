import { PageContent, PageMetadata } from "../types/page";

interface PageCardProps {
  content: PageContent;
  metadata: PageMetadata;
}

export const PageCard = ({ content, metadata }: PageCardProps) => {
  const { title, description, legalText } = content;
  const isWelcomePage = metadata.pageId === "terms";

  const textColorClass = "text-gray-900";
  const mutedTextColorClass = "text-gray-600";

  return (
    <div className={`${isWelcomePage ? "bg-white rounded-lg p-6" : ""}`}>
      <h2 className={`text-2xl font-bold ${textColorClass} mb-8`}>{title}</h2>
      {description && <p className={`mb-6 ${mutedTextColorClass}`}>{description}</p>}
      {legalText && (
        <div className={`prose prose-sm max-w-none ${mutedTextColorClass}`}>
          <div className="space-y-6">
            {legalText}
          </div>
        </div>
      )}
    </div>
  );
};
