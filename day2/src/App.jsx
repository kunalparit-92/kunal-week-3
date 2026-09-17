import './App.css'
import Header from './components/Header'
import StudentCard from './components/StudentCard'
import Footer from './components/Footer'

function App() {
  const student = {
    name: 'Kunal Parit',
    course: 'BCA',
    college: 'D. R. Mane Mahavidyalay, Kagal',
    year: 'Final Year'
  }

  return (
    <div className="app">
      <Header title="React Components & Props" />

      <main className="main">
        <h2>Student Profile</h2>
        <p className="subtitle">Day 2 - Components & Props</p>

        <StudentCard
          name={student.name}
          course={student.course}
          college={student.college}
          year={student.year}
        />
      </main>

      <Footer text="React Fundamentals - Day 2" />
    </div>
  )
}

export default App