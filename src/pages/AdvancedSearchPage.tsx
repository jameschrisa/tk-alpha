import { Page } from "../components/Page";
import { PageProps } from "../types/page";
import { useState } from "react";

export const AdvancedSearchPage = ({ onNavigate }: { onNavigate: (targetPage: string) => void }) => {
  const [exactPhrase, setExactPhrase] = useState("");
  const [anyWords, setAnyWords] = useState("");
  const [excludeWords, setExcludeWords] = useState("");
  const [siteDomain, setSiteDomain] = useState("");
  const [timeRange, setTimeRange] = useState("any");

  const constructSearchUrl = () => {
    let url = "https://www.google.com/search?q=";
    const params = [];

    if (exactPhrase) {
      params.push(`"${exactPhrase}"`);
    }

    if (anyWords) {
      params.push(anyWords.split(" ").join(" OR "));
    }

    if (excludeWords) {
      params.push(excludeWords.split(" ").map(word => `-${word}`).join(" "));
    }

    if (siteDomain) {
      params.push(`site:${siteDomain}`);
    }

    url += encodeURIComponent(params.join(" "));

    if (timeRange !== "any") {
      url += `&tbs=qdr:${timeRange}`;
    }

    return url;
  };

  const pageProps: PageProps = {
    metadata: {
      pageId: "advanced-search",
      controlIds: ["back", "search", "social-media"],
    },
    content: {
      breadcrumbs: [
        { label: "Start", onClick: () => onNavigate("terms") },
        { label: "Begin Data Collection", onClick: () => onNavigate("data-collection") },
        { label: "Threat Maker", onClick: () => onNavigate("threat-maker") },
        { label: "Safety Considerations", onClick: () => onNavigate("safety-considerations") },
        { label: "KTM", onClick: () => onNavigate("known-threat-maker") },
        { label: "Google Search", onClick: () => onNavigate("google-search") },
        { label: "Run Search" }
      ],
      title: "Advanced Google Search",
      legalText: (
        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Exact Phrase <span className="text-gray-500">(words in this exact order)</span>
                </label>
                <input
                  type="text"
                  value={exactPhrase}
                  onChange={(e) => setExactPhrase(e.target.value)}
                  placeholder='e.g., "threat to school"'
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Any of these words <span className="text-gray-500">(separated by spaces)</span>
                </label>
                <input
                  type="text"
                  value={anyWords}
                  onChange={(e) => setAnyWords(e.target.value)}
                  placeholder="e.g., threat bomb shoot"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Exclude words <span className="text-gray-500">(separated by spaces)</span>
                </label>
                <input
                  type="text"
                  value={excludeWords}
                  onChange={(e) => setExcludeWords(e.target.value)}
                  placeholder="e.g., game movie"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Site or domain <span className="text-gray-500">(e.g., twitter.com)</span>
                </label>
                <input
                  type="text"
                  value={siteDomain}
                  onChange={(e) => setSiteDomain(e.target.value)}
                  placeholder="e.g., twitter.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Time Range
                </label>
                <select
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent"
                >
                  <option value="any">Any time</option>
                  <option value="h">Past hour</option>
                  <option value="d">Past 24 hours</option>
                  <option value="w">Past week</option>
                  <option value="m">Past month</option>
                  <option value="y">Past year</option>
                </select>
              </div>

              <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="font-medium text-white mb-2">Search URL:</div>
                <div className="break-all">{constructSearchUrl()}</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    controls: {
      alternativePages: [
        {
          controlId: "back",
          label: "Back",
          targetPage: "google-search",
          className: "bg-black hover:bg-gray-900"
        },
        {
          controlId: "search",
          label: "Search",
          targetPage: "google-search",
          className: "bg-[#10B981] hover:bg-[#059669]",
          onClick: () => {
            const searchUrl = constructSearchUrl();
            window.open(searchUrl, '_blank');
          }
        },
        {
          controlId: "social-media",
          label: "Go to Social Media Platforms",
          targetPage: "social-media",
          className: "bg-[#0047CC] hover:bg-[#0037A1]"
        }
      ]
    },
  };

  return <Page {...pageProps} onNavigate={onNavigate} />;
};
