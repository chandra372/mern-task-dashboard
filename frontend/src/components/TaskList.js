import React from 'react';
import './TaskList.css';

const TaskList = ({ tasks, onDeleteTask, onUpdateTask }) => {
  if (tasks.length === 0) {
    return <div className="task-list-empty">No tasks yet. Create one to get started!</div>;
  }

  return (
    <div className="task-list">
      <h2>Your Tasks</h2>
      {tasks.map((task) => (
        <div key={task._id} className={`task-item priority-${task.priority}`}>
          <div className="task-header">
            <h3>{task.title}</h3>
            <span className="priority-badge">{task.priority}</span>
          </div>
          {task.description && (
            <p className="task-description">{task.description}</p>
          )}
          <div className="task-footer">
            <small>{new Date(task.createdAt).toLocaleDateString()}</small>
            <div className="task-actions">
              <button
                className="btn-complete"
                onClick={() => onUpdateTask(task._id, { completed: !task.completed })}
              >
                {task.completed ? 'Undo' : 'Complete'}
              </button>
              <button
                className="btn-delete"
                onClick={() => onDeleteTask(task._id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
