import MessageInput from "../home/components/MessageInput";
import DiagnosisCard from "./components/Diagnosis";
import MoodStatus from "./components/MoodStatus";
import ObjectiveCard from "./components/Objective";
import SessionDetail from "./components/SessionDetail";
import SummaryMain from "./components/SummaryMain";
import "./SessionSummary.css";
const handleSendMessage = () => {

}

const SessionSummary = () => {
  return (
    <div className="fullscreen-container">
      <SummaryMain>
        <SessionDetail />
        <MoodStatus />
        <DiagnosisCard />
        <ObjectiveCard />
       
      </SummaryMain>
     
      <div className="flex-grow">
          <MessageInput onSend={handleSendMessage} />
        </div>
    </div>
  );
};

export default SessionSummary;