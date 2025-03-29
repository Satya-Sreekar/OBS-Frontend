import { ArrowRight } from "lucide-react"
import imageLogo from "@/assets/pl-image.png";
import { Component } from "react";
import ActionButtons from "./ActionButtons";



interface Appointment {
  id: number
  name: string
  avatar: string
  date: string
  time: string
  location: string
}


interface AppointmentCardProps {
  appointment: Appointment
}

const AppointmentCard = ({ appointment }: AppointmentCardProps) => {
  const { name, avatar, date, time, location } = appointment

  return (
    <div className="card">
      <div className="patient-info">
        <img src={imageLogo} alt={name} className="avatar" />
        <h3 className="patient-name">{name}</h3>
      </div>
      <div className="appointment-details">
        <div className="detail-row">
          <span className="detail-label">Date:</span>
          <span className="detail-value">{`${date} at ${time}`}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Location:</span>
          <span className="detail-value">{location}</span>
        </div>
      </div>
      <button className="start-session-btn">
        Start Session
        <ArrowRight size={16} />
      </button>
    </div>
  )
}



const UpcomingAppointments = ({ appointments }: { appointments: Appointment[] }) => {
  return (
    <div className="dashboard-section">
      <h2 className="section-title">Upcoming Appointments</h2>
      <div className="card-grid">
        {appointments.map((appointment) => (
          <AppointmentCard key={appointment.id} appointment={appointment} />
        ))}
      </div>
      <ActionButtons />
    </div>
  );
};

export default UpcomingAppointments;
