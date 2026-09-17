function StudentCard() {
  return (
    <aside className="student-card">
      <div className="avatar">K</div>

      <h2>Kunal Parit</h2>

      <p className="role">BCA Student</p>

      <div className="student-info">
        <div>
          <span>Education</span>
          <strong>BCA</strong>
        </div>

        <div>
          <span>Focus</span>
          <strong>Web Development</strong>
        </div>

        <div>
          <span>Learning</span>
          <strong>React</strong>
        </div>
      </div>

      <button>View Profile</button>
    </aside>
  )
}

export default StudentCard