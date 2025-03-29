import ActionButtons from "./components/ActionButtons"
import UpcomingAppointments from "./components/AppointmentCard";
import AppointmentCard from "./components/AppointmentCard"
import CaseLoadSummarySection from "./components/CaseloadSummary";
import CaseloadSummary from "./components/CaseloadSummary"
import OverdueProgressNote from "./components/OverdueProgressNote"
import imageLogo from "@/assets/pl-image.png";


function AppointmentSection() {



  const appointments = [
    {
      id: 1,
      name: "John Doe",
      avatar: imageLogo,
      date: "Feb 6, 2025",
      time: "8:45 AM",
      location: "Virtual",
    },
    {
      id: 2,
      name: "Darlene Robertson",
      avatar: imageLogo,
      date: "Feb 6, 2025",
      time: "12:00 PM",
      location: "In-Person",
    },
    {
      id: 3,
      name: "Eleanor Pena",
      avatar: imageLogo,
      date: "Feb 6, 2025",
      time: "3:15 PM",
      location: "Virtual",
    },

  ]



  const caseloadSummary = {
    totalActive: {
      count: 32,
      percentage: 62,
      label: "This month",
    },
    highRisk: {
      count: 6,
      label: "Patients flagged",
    },
    followUp: {
      count: 3,
      label: "Patients have missed their sessions",
    },
  }

  const overdueNotes = [
    {
      id: 1,
      name: "Jerome Bell",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Theresa Webb",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Ralph Edwards",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <div className="dashboard">
      <UpcomingAppointments appointments={appointments} />
      <CaseLoadSummarySection caseLoadSummaryData={caseloadSummary} />
      <OverdueProgressNote overdueProgessNotes={overdueNotes} />
    </div>
  )
}

export default AppointmentSection

