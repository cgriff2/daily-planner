import React from 'react';

interface TaskItemProps {
  taskId: string;
  title: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  onToggleCompleted: (taskId: string) => void;
  onEdit: (taskId: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  taskId,
  title,
  completed,
  priority,
  onToggleCompleted,
  onEdit,
}) => {

  // Apply priority class based on task priority
  const priorityClass = `task-priority-${priority}`;

  return (
    <div
      className={`task-item ${completed ? 'completed' : ''} ${priorityClass}`}
    >
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggleCompleted(taskId)}
        className="task-checkbox"
      />
      <span className="task-title">{title}</span>
      <button
        className="edit-btn"
        onClick={(e) => {
          e.stopPropagation();
          onEdit(taskId);
        }}
      >
        Edit
      </button>
    </div>
  );
};

export default TaskItem;