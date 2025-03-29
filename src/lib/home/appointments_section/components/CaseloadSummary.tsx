import { ArrowUp } from "lucide-react"
import ActionButtons from "./ActionButtons"

interface CaseloadSummaryData {
  totalActive: {
    count: number
    percentage: number
    label: string
  }
  highRisk: {
    count: number
    label: string
  }
  followUp: {
    count: number
    label: string
  }
}

interface CaseloadSummaryProps {
  data: CaseloadSummaryData
}

const CaseloadSummary = ({ data }: CaseloadSummaryProps) => {
  const { totalActive, highRisk, followUp } = data

  return (
    <div className="card-grid">
      <div className="card">
        <h3 className="summary-title">Total Active Patients</h3>
        <div className="summary-value-container">
          <span className="summary-value">{totalActive.count}</span>
          <span className="percentage-increase">
            <ArrowUp size={16} className="arrow-up" />
            {totalActive.percentage}%
          </span>
        </div>
        <p className="summary-label">{totalActive.label}</p>
      </div>

      <div className="card">
        <h3 className="summary-title">High-Risk Patients</h3>
        <span className="summary-value">{highRisk.count}</span>
        <p className="summary-label">{highRisk.label}</p>
      </div>

      <div className="card">
        <h3 className="summary-title">Follow-Up Patients</h3>
        <span className="summary-value">{followUp.count}</span>
        <p className="summary-label">{followUp.label}</p>
      </div>
    </div>
  )
}





const CaseLoadSummarySection = ({ caseLoadSummaryData }: { caseLoadSummaryData: CaseloadSummaryData }) => {
  return (
    <div className="dashboard-section">
    <h2 className="section-title">Caseload Summary</h2>
    <CaseloadSummary data={caseLoadSummaryData} />
    <ActionButtons />
  </div>
  );
};

export default CaseLoadSummarySection;