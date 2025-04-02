import React from "react";
import './Diagnosis.css';

const DiagnosisCard: React.FC = () => { 
  return (
    <div className="diagnosis-card">
      <p className="title">Diagnosis</p>
      <p className="content">
        Adjustment disorder with mixed disturbance of emotions and conduct
      </p>
      <p className="title">
        Goal <span className="subtitle">(Over the next 180 days)</span>
      </p>
      <p className="content">
        Lorem ipsum dolor sit amet...
      </p>
    </div>
  );
};

export default DiagnosisCard;
