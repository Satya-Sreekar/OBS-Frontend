import React, { ReactNode } from "react";
import "./SummaryMain.css";
interface SummaryMainProps {
  children: ReactNode;
}

const SummaryMain: React.FC<SummaryMainProps> = ({ children }) => {
  return <div className="white-box">{children}</div>;
};

export default SummaryMain;
