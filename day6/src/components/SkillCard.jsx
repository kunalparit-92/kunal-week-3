function SkillCard({ skill }) {
  return (
    <div className="skill-card">
      <div className="skill-icon">
        {skill.charAt(0)}
      </div>

      <h3>{skill}</h3>
    </div>
  )
}

export default SkillCard