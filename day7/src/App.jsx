import { useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (text) => {
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text,
        completed: false
      }
    ])
  }

  const toggleTask = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const completed = tasks.filter(task => task.completed).length
  const pending = tasks.length - completed

  return (
    <div className="app">
      <header className="header">
        <h1>Task Tracker</h1>
        <p>React Mini Project</p>
      </header>

      <main className="container">
        <div className="hero">
          <h2>My Daily Tasks</h2>
          <p>Manage your tasks easily with React</p>
        </div>

        <div className="stats">
          <div className="stat">
            <h3>{tasks.length}</h3>
            <p>Total Tasks</p>
          </div>

          <div className="stat">
            <h3>{completed}</h3>
            <p>Completed</p>
          </div>

          <div className="stat">
            <h3>{pending}</h3>
            <p>Pending</p>
          </div>
        </div>

        <TaskForm onAddTask={addTask} />

        <TaskList
          tasks={tasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />
      </main>

      <footer className="footer">
        <p>React Fundamentals - Day 7</p>
      </footer>
    </div>
  )
}

export default App