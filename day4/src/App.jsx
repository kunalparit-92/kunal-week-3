import { useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'

function App() {
  const [task, setTask] = useState('')
  const [message, setMessage] = useState('')

  const handleTaskSubmit = (taskName) => {
    setTask(taskName)
    setMessage(`Task "${taskName}" added successfully!`)
  }

  return (
    <div className="app">
      <header className="header">
        <h1>React Event Handling</h1>
        <p>Day 4 - Events & Forms</p>
      </header>

      <main className="main">
        <div className="intro">
          <h2>Task Form</h2>
          <p>Enter a task and submit the form</p>
        </div>

        <TaskForm onTaskSubmit={handleTaskSubmit} />

        {task && (
          <div className="result-card">
            <h3>Latest Task</h3>
            <p>{task}</p>
            <span>{message}</span>
          </div>
        )}
      </main>

      <footer className="footer">
        <p>React Fundamentals - Day 4</p>
      </footer>
    </div>
  )
}

export default App