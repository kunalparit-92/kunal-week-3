import { useState } from 'react'

function TaskForm({ onTaskSubmit }) {
  const [taskInput, setTaskInput] = useState('')

  const handleChange = (event) => {
    setTaskInput(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (taskInput.trim() === '') {
      return
    }

    onTaskSubmit(taskInput)
    setTaskInput('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <label htmlFor="task">Task Name</label>

      <input
        id="task"
        type="text"
        value={taskInput}
        onChange={handleChange}
        placeholder="Enter your task"
      />

      <button type="submit">Add Task</button>
    </form>
  )
}

export default TaskForm