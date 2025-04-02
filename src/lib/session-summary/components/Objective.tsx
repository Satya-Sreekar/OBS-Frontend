import './Objective.css';
const ObjectiveCard = () => {
  return (
    <div className="session-summary">
      <p className="objective-title">
        <strong>Objective</strong> <span className="subtitle">(Over the next 180 days)</span>
      </p>

      <div className="session-card">
        <p className="section-title">Intervention Performed</p>
        <p className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>

        <p className="section-title">Planned Intervention</p>
        <p className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
      </div>

      <div className="session-card">
        <p className="section-title">Session Focus</p>
        <p className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>

        <p className="section-title">
          Plan of Action <span className="subtitle">(What you plan to do during next session?)</span>
        </p>
        <p className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>

        <p className="section-title">
          Response to Interventions <span className="subtitle">(How the client responded & behaved during the session?)</span>
        </p>
        <p className="content">Receptive, Interested, Unable to comprehend</p>

        <p className="section-title">Justification for Continued Service</p>
        <p className="content">Ability to Rehabilitate</p>
      </div>
    </div>
  );
};

export default ObjectiveCard;
