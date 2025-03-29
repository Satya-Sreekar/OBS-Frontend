interface OverdueNote {
  id: number
  name: string
  avatar: string
}

interface OverdueProgressNoteProps {
  note: OverdueNote
}

const OverdueProgressNote = ({ note }: OverdueProgressNoteProps) => {
  const { name, avatar } = note

  return (
    <div className="card">
      <div className="patient-info">
        <img src={avatar || "/placeholder.svg"} alt={name} className="avatar" />
        <h3 className="patient-name">{name}</h3>
      </div>
    </div>
  )
}


const OverdueProgressNoteSection = ({ overdueProgessNotes }: { overdueProgessNotes: OverdueNote[] }) => {
  return (
    <div className="dashboard-section">
    <h2 className="section-title">Overdue Progress Note</h2>
    <div className="card-grid">
      {overdueProgessNotes.map((note) => (
        <OverdueProgressNote key={note.id} note={note} />
      ))}
    </div>
  </div>
  );
};

export default OverdueProgressNoteSection;
