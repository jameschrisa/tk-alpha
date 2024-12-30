import { useState } from "react";
import { WelcomePage } from "./pages/WelcomePage";
import { DataCollectionPage } from "./pages/DataCollectionPage";
import { ThreatMakerPage } from "./pages/ThreatMakerPage";
import { SafetyConsiderationsPage } from "./pages/SafetyConsiderationsPage";
import { KnownThreatMakerPage } from "./pages/KnownThreatMakerPage";
import { ImmediateActionRequiredPage } from "./pages/ImmediateActionRequiredPage";
import { GoogleSearchPage } from "./pages/GoogleSearchPage";
import { AdvancedSearchPage } from "./pages/AdvancedSearchPage";
import { SocialMediaAccountsPage } from "./pages/SocialMediaAccountsPage";
import { FacebookSearchPage } from "./pages/FacebookSearchPage";
import { InstagramSearchPage } from "./pages/InstagramSearchPage";
import { XSearchPage } from "./pages/XSearchPage";
import { TikTokSearchPage } from "./pages/TikTokSearchPage";
import { SnapchatSearchPage } from "./pages/SnapchatSearchPage";
import { DiscordSearchPage } from "./pages/DiscordSearchPage";
import { YouTubeSearchPage } from "./pages/YouTubeSearchPage";
import { OtherSearchPage } from "./pages/OtherSearchPage";

function App() {
  const [currentPage, setCurrentPage] = useState("known-threat-maker");

  const handleNavigate = (targetPage: string) => {
    if (targetPage === "exit-session") {
      // In a real app, this would handle session cleanup
      setCurrentPage("terms");
      return;
    }
    setCurrentPage(targetPage);
  };

  return (
    <>
      {currentPage === "terms" && <WelcomePage onNavigate={handleNavigate} />}
      {currentPage === "data-collection" && <DataCollectionPage onNavigate={handleNavigate} />}
      {currentPage === "threat-maker" && <ThreatMakerPage onNavigate={handleNavigate} />}
      {currentPage === "safety-considerations" && <SafetyConsiderationsPage onNavigate={handleNavigate} />}
      {currentPage === "known-threat-maker" && <KnownThreatMakerPage onNavigate={handleNavigate} />}
      {currentPage === "action-required" && <ImmediateActionRequiredPage onNavigate={handleNavigate} />}
      {currentPage === "google-search" && <GoogleSearchPage onNavigate={handleNavigate} />}
      {currentPage === "advanced-search" && <AdvancedSearchPage onNavigate={handleNavigate} />}
      {currentPage === "social-media" && <SocialMediaAccountsPage onNavigate={handleNavigate} />}
      {currentPage === "facebook-search" && <FacebookSearchPage onNavigate={handleNavigate} />}
      {currentPage === "instagram-search" && <InstagramSearchPage onNavigate={handleNavigate} />}
      {currentPage === "x-search" && <XSearchPage onNavigate={handleNavigate} />}
      {currentPage === "tiktok-search" && <TikTokSearchPage onNavigate={handleNavigate} />}
      {currentPage === "snapchat-search" && <SnapchatSearchPage onNavigate={handleNavigate} />}
      {currentPage === "discord-search" && <DiscordSearchPage onNavigate={handleNavigate} />}
      {currentPage === "youtube-search" && <YouTubeSearchPage onNavigate={handleNavigate} />}
      {currentPage === "other-search" && <OtherSearchPage onNavigate={handleNavigate} />}
    </>
  );
}

export default App;
