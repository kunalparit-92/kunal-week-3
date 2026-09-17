import TaskItem from './TaskItem'

function TaskList({ tasks, onToggle, onDelete }) {
  return (
    <section className="task-box">
      <div className="task-title">
        <h2>Task List</h2>
        <span>{tasks.length} Tasks</span>
      </div>

      {tasks.length === 0 ? (
        <div className="empty">
          <div className="empty-icon">✓</div>
          <h3>No tasks yet</h3>
          <p>Add your first task above.</p>
        </div>
      ) : (
        <div className="task-list">
          {tasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default TaskList