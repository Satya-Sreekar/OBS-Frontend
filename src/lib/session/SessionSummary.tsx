import SessionDetail from "./components/SessionDetail";
import SummaryMain from "./components/SummaryMain";
import "./SessionSummary.css";
const SessionSummary = () => {
  return (
   <div className="fullscreen-container">
        <SummaryMain>
                <SessionDetail></SessionDetail>
        </SummaryMain>
   </div>
  );
};

export default SessionSummary;