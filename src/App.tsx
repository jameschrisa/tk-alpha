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
      {currentPage === "social-media" && <SocialMediaAccountsPage onNavigate={handleNavigate} />}
      {currentPage === "advanced-search" && <AdvancedSearchPage onNavigate={handleNavigate} />}
    </>
  );
}

export default App;
