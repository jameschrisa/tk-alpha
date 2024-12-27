import { useState } from "react";
import { Page } from "../components/Page";
import { PageProps } from "../types/page";
import { AlertTriangle, SquareAsterisk, ChevronDown } from "lucide-react";

interface SafetyQuestion {
  id: string;
  question: string;
  description: string;
  isOpen: boolean;
  response: string | null;
}

export const SafetyConsiderationsPage = ({ onNavigate }: { onNavigate: (targetPage: string) => void }) => {
  const [questions, setQuestions] = useState<SafetyQuestion[]>([
    {
      id: "access",
      question: "Does the SOC have immediate access to the means to carry out the threat?",
      description: "When assessing a potential threat, it is crucial to evaluate whether the subject of concern (SOC) has immediate access to the means necessary to carry out that threat. Access to firearms, weapons, chemicals, or any means described in their threat significantly escalates the level of concern. Immediate removal of access to the means should be the priority in collaboration with law enforcement if the SOC is confirmed to have access. If digital evidence (e.g., social media posts or online purchases) suggests the subject has acquired or is seeking these tools, further investigation and legal measures, such as search warrants, may be required. Access our Search Warrant Template Language for further information.",
      isOpen: false,
      response: null
    },
    {
      id: "rehearsal",
      question: "Has any rehearsal behavior or planning been identified or observed?",
      description: "Rehearsal or planning behaviors can include actions like researching the target, practicing the use of weapons, or access to floor plans of a site. Planning may be subtle but can often be detected through changes in online behavior, such as searches or posts indicating a growing focus on the potential attack. Even if these behaviors do not indicate an imminent threat, identifying them early allows time for intervention. Digital tools such as social media profiles, messages, and internet history should be reviewed for evidence of these patterns.",
      isOpen: false,
      response: null
    },
    {
      id: "baseline",
      question: "Is this a shift in the SOC's baseline behavior?",
      description: "A subject's baseline behavior refers to their usual patterns of interaction, mood, and activity. However, significant changes in the frequency, intensity, or recency of concerning, worrisome, or threat-related behaviors can signal an important shift. This might include an increase in hostile comments, more frequent expressions of grievances, or a recent surge in violent ideation. Even if these behaviors are subtle, any increase or escalation should be carefully documented, as it may denote growing risk. Observing patterns across time—whether in communication, social media activity, or physical behaviors—helps identify whether the subject's behavior is becoming more erratic or threatening.",
      isOpen: false,
      response: null
    }
  ]);

  const toggleQuestion = (id: string) => {
    setQuestions(questions.map(q => 
      q.id === id ? { ...q, isOpen: !q.isOpen } : q
    ));
  };

  const setResponse = (id: string, value: string) => {
    setQuestions(questions.map(q =>
      q.id === id ? { ...q, response: value } : q
    ));
  };

  const handleSubmit = () => {
    const hasYesResponse = questions.some(q => q.response === "yes");
    onNavigate(hasYesResponse ? "action-required" : "known-threat-maker");
  };

  const pageProps: PageProps = {
    metadata: {
      pageId: "safety-considerations",
      controlIds: ["back", "submit"],
    },
    content: {
      title: (
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-red-500" />
          <span>Immediate Safety Considerations</span>
        </div>
      ),
      description: "These questions are designed to help you determine the immediate risk level posed by the Subject of Concern (SOC). It is important to answer each question thoroughly to ensure appropriate actions are taken. Before proceeding, please answer the following safety consideration questions:",
      legalText: (
        <div className="space-y-4">
          {questions.map((q) => (
            <div key={q.id} className="border rounded-lg bg-white shadow-sm">
              <div className="flex items-start gap-3 p-4">
                <div className="flex-shrink-0 mt-1">
                    <SquareAsterisk className="w-5 h-5 text-red-500" />
                </div>
                <div className="flex-grow">
                  <button
                    onClick={() => toggleQuestion(q.id)}
                    className="w-full flex items-start justify-between group"
                  >
                    <span className="text-left font-medium pr-12">{q.question}</span>
                    <div className={`flex-shrink-0 transform transition-transform ${q.isOpen ? 'rotate-180' : ''} ml-4 mr-2`}>
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    </div>
                  </button>
                  
                  {q.isOpen && (
                    <div className="mt-4">
                      <p className="text-gray-600 mb-4 text-sm">{q.description}</p>
                      <select
                        value={q.response || ""}
                        onChange={(e) => setResponse(q.id, e.target.value)}
                        className="w-full max-w-xs h-11 pl-4 pr-10 border bg-white appearance-none text-base"
                        style={{ 
                          backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 0.75rem center',
                          backgroundSize: '1rem 1rem'
                        }}
                      >
                        <option value="" disabled>Select a Response</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                        <option value="unknown">Unknown at this time</option>
                      </select>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    controls: {
      previousPage: "threat-maker",
      alternativePages: [
        {
          controlId: "submit",
          targetPage: "known-threat-maker"
        }
      ],
      onSubmit: handleSubmit
    },
  };

  return <Page {...pageProps} onNavigate={onNavigate} />;
};
