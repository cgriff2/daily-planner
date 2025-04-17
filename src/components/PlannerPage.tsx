import React, { useState } from 'react';
import { useTasks, Task } from '../context/TaskContext';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';
import { useNavigate } from 'react-router-dom';
import '../App.css';

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

      <div className="weekly-grid">
        {weekDates.map(date => {
          const dayTasks = tasks
          .filter(task => task.date === date)
          .filter(task => showCompleted || !task.completed);
          const dateObj = new Date(date);
          const label = `${dateObj.getMonth() + 1}/${dateObj.getDate()}`;
          const weekday = dateObj.toLocaleDateString('en-US', { weekday: 'short' });

          return (
            <div key={date} className="day-column">
              <div className="day-header">
                <strong>{label}</strong>
                <div className="weekday">{weekday}</div>
              </div>
              <ul className="day-tasks">
                {dayTasks.map(task => (
                  <TaskItem
                    key={task.taskId}
                    taskId={task.taskId}
                    title={task.title}
                    completed={task.completed}
                    priority={task.priority}
                    onToggleCompleted={() => handleToggleComplete(task)}
                    onEdit={() => setEditingTask(task)}
                  />
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {!editingTask && (
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
      )}

      {editingTask && (
        <TaskForm task={editingTask} closeForm={() => setEditingTask(null)} />
      )}
    </div>
  );
};

export default PlannerPage;
