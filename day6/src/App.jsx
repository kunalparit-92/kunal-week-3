import './App.css'
import Header from './components/Header'
import StudentCard from './components/StudentCard'
import SkillCard from './components/SkillCard'
import ProjectCard from './components/ProjectCard'

function App() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Python', 'C']

  const projects = [
    {
      id: 1,
      name: 'E-Commerce Website',
      type: 'HTML & CSS',
      status: 'Completed'
    },
    {
      id: 2,
      name: 'College Website',
      type: 'HTML & CSS',
      status: 'Completed'
    },
    {
      id: 3,
      name: 'React Task Tracker',
      type: 'React',
      status: 'In Progress'
    }
  ]

  return (
    <div className="app">
      <Header />

      <main className="main">
        <StudentCard />

        <section className="dashboard">
          <div className="welcome">
            <h2>Student Dashboard</h2>
            <p>React Fundamentals - Day 6</p>
          </div>

          <div className="stats">
            <div className="stat-card">
              <h3>6</h3>
              <p>Skills</p>
            </div>

            <div className="stat-card">
              <h3>2</h3>
              <p>Completed Projects</p>
            </div>

            <div className="stat-card">
              <h3>1</h3>
              <p>In Progress</p>
            </div>
          </div>

          <div className="content-card">
            <h2>My Skills</h2>

            <div className="skill-grid">
              {skills.map((skill) => (
                <SkillCard key={skill} skill={skill} />
              ))}
            </div>
          </div>

          <div className="content-card">
            <h2>My Projects</h2>

            <div className="project-list">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  name={project.name}
                  type={project.type}
                  status={project.status}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>React Fundamentals - Day 6</p>
      </footer>
    </div>
  )
}

export default App