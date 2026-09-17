import { useState } from 'react'

function TaskForm({ onAddTask }) {
  const [text, setText] = useState('')

  const submitTask = (e) => {
    e.preventDefault()

    if (!text.trim()) return

    onAddTask(text.trim())
    setText('')
  }

  return (
    <form className="task-form" onSubmit={submitTask}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your task..."
      />

      <button type="submit">
        Add Task
      </button>
    </form>
  )
}

export default TaskForm