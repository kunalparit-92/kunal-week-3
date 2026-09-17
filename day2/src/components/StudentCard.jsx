function StudentCard({ name, course, college, year }) {
  return (
    <div className="student-card">
      <div className="avatar">{name.charAt(0)}</div>
      <h3>{name}</h3>
      <div className="details">
        <p><strong>Course:</strong> {course}</p>
        <p><strong>College:</strong> {college}</p>
        <p><strong>Year:</strong> {year}</p>
      </div>
      <button>View Profile</button>
    </div>
  )
}

export default StudentCard