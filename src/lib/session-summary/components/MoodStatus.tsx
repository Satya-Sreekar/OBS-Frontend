import React from "react";
import "./MoodStatus.css";

const MoodStatus: React.FC = () => {
  return (
    <div className="mood-status-container">
      <h2 className="mood-status-title">Mood Status</h2>
      <div className="mood-status-grid">
        <div className="mood-status-item">
          <span className="label">Appearance</span>
          <span className="value">Anxious</span>
        </div>
        <div className="mood-status-item">
          <span className="label">Orientation</span>
          <span className="value">Fairly Oriented</span>
        </div>
        <div className="mood-status-item">
          <span className="label">Behavior</span>
          <span className="value">Agitated</span>
        </div>
        <div className="mood-status-item">
          <span className="label">Speech</span>
          <span className="value">Garbled</span>
        </div>
        <div className="mood-status-item">
          <span className="label">Affect</span>
          <span className="value">Blunted</span>
        </div>
        <div className="mood-status-item">
          <span className="label">Mood</span>
          <span className="value">Anxious</span>
        </div>
        <div className="mood-status-item">
          <span className="label">Thought Process</span>
          <span className="value">Fairly Organized</span>
        </div>
        <div className="mood-status-item">
          <span className="label">Thought Content</span>
          <span className="value">Reasonable</span>
        </div>
        <div className="mood-status-item">
          <span className="label">Perception</span>
          <span className="value">Derealization</span>
        </div>
        <div className="mood-status-item">
          <span className="label">Judgement</span>
          <span className="value">Fair</span>
        </div>
        <div className="mood-status-item">
          <span className="label">Insight</span>
          <span className="value">Normal</span>
        </div>
        <div className="mood-status-item">
          <span className="label">Appetite</span>
          <span className="value">Excessive</span>
        </div>
        <div className="mood-status-item">
          <span className="label">Sleep</span>
          <span className="value">Fair</span>
        </div>
        <div className="mood-status-item">
          <span className="label">Suicidality</span>
          <span className="value">Fleeting Suicidal Ideas</span>
        </div>
        <div className="mood-status-item">
          <span className="label">Homicidality</span>
          <span className="value">Wishes to be Homicidal</span>
        </div>
        <div className="mood-status-item focus-area">
          <span className="label">Focus Areas</span>
          <span className="value">Stress management, emotional regulations.</span>
        </div>
      </div>
    </div>
  );
};

export default MoodStatus;
