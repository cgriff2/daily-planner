import React, { useState } from 'react';
import { useTasks, Task } from '../context/TaskContext';
import TaskForm from './TaskForm';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const PlannerPage: React.FC = () => {
  const { tasks, updateTask } = useTasks();
  const [currentWeekOffset, setWeekOffset] = useState(0);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [showCompleted, setShowCompleted] = useState(true);
  const navigate = useNavigate();

  const today = new Date();
  const weekStart = new Date(today.setDate(today.getDate() - today.getDay() + currentWeekOffset * 7));

  const weekDates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(weekStart);
    d.setDate(d.getDate() + i);
    return d.toISOString().split('T')[0];
  });

  const weeklyTasks = tasks.filter(t => weekDates.includes(t.date));
  const visibleTasks = weeklyTasks.filter(t => showCompleted || !t.completed);

  const handleToggleComplete = (task: Task) => {
    updateTask({ ...task, completed: !task.completed });
  };

  return (
    <div className="planner-container">
      <div className="planner-header">
        <button className="home-button" onClick={() => navigate('/')}>Home</button>
        <div className="navigation-buttons">
          <button onClick={() => setWeekOffset(o => o - 1)}>← Previous</button>
          <button onClick={() => setWeekOffset(o => o + 1)}>Next →</button>
        </div>
      </div>
      <label className="toggle-completed">
        <input
          type="checkbox"
          checked={showCompleted}
          onChange={() => setShowCompleted(s => !s)}
        />
        Show Completed Tasks
      </label>

      <ul className="task-list">
        {visibleTasks.map(t => (
          <li key={t.taskId} className={`task-item ${t.completed ? 'completed' : ''}`}>
            <span onClick={() => handleToggleComplete(t)} className="task-title">
              {t.title}
            </span>
            <button onClick={() => setEditingTask(t)} className="edit-btn">Edit</button>
          </li>
        ))}
      </ul>

      <button
        className="add-button"
        onClick={() =>
          setEditingTask({
            taskId: '',
            title: '',
            description: '',
            date: new Date().toISOString().split('T')[0],
            priority: 'medium',
            completed: false,
          })
        }
      >
        + Add Task
      </button>

      {editingTask && (
        <TaskForm task={editingTask} closeForm={() => setEditingTask(null)} />
      )}
    </div>
  );
};

export default PlannerPage;