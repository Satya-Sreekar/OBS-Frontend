import React from "react";
import "./SessionDetail.css";
import Logo from "@/assets/LogoSmall.png";
import ProfileImage from "@/assets/pl-image.png";
const SessionDetail: React.FC = () => {
    return (
        <div>
            <div className="header">
                <div className="title-time">
                    <div className="logo">
                        <img src={Logo} alt="Theracuity Logo" />
                        <h2>Theracuity</h2>
                    </div>
                    <span>9:31 PM</span>
                </div>
            </div>

            <p>Here is John Doe’s progress notes</p>

            <div className="note-card">
                <div className="note-row">
                    <div className="profile-column">
                        <img src={ProfileImage} alt="John Doe" />
                    </div>
                    <div className="column">
                        <span className="label">Name</span>
                        <div className="profile">
                            
                            <span>John Doe</span>
                        </div>
                    </div>
                    <div className="column">
                        <span className="label">Gender</span>
                        <span>Male</span>
                    </div>
                    <div className="column">
                        <span className="label">Status</span>
                        <span className="status pending">● Pending</span>
                    </div>
                    <div className="column">
                        <span className="label">Location</span>
                        <span>Virtual</span>
                    </div>
                </div>

                <hr />

                <div className="note-row">
                    <div className="column">
                        <span className="label">Provider(s)</span>
                        <div className="profile">
                            <img src={ProfileImage} alt="Daniel Ryan" />
                            <span>Daniel Ryan</span>
                        </div>
                    </div>
                    <div className="column">
                        <span className="label">Date of Session</span>
                        <span>10 Feb 2024</span>
                    </div>
                    <div className="column">
                        <span className="label">Duration</span>
                        <span>40 mins</span>
                    </div>
                    <div className="column">
                        <span className="label">Next Session</span>
                        <span>15 Feb 2024 3:00 PM</span>
                    </div>
                </div>
            </div>

            <div className="actions">
                <button className="edit-btn">Edit Note</button>
                <button className="approve-btn">Approve</button>
            </div>
        </div>
    );
};

export default SessionDetail;
