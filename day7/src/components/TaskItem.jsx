function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className={`task-item ${task.completed ? 'done' : ''}`}>
      <div className="task-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />

        <span>{task.text}</span>
      </div>

      <button
        className="delete"
        onClick={() => onDelete(task.id)}
      >
        Delete
      </button>
    </div>
  )
}

export default TaskItem