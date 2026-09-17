function ProjectCard({ name, type, status }) {
  const completed = status === 'Completed'

  return (
    <div className="project-card">
      <div>
        <h3>{name}</h3>
        <p>{type}</p>
      </div>

      <span className={completed ? 'completed' : 'progress'}>
        {status}
      </span>
    </div>
  )
}

export default ProjectCard