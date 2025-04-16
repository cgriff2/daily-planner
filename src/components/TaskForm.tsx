/* eslint-disable  @typescript-eslint/no-explicit-any */

import React, { useState, useEffect } from 'react';
import { useTasks, Task } from '../context/TaskContext';
import '../App.css';

type TaskFormProps = {
  task: Task | null;
  closeForm: () => void;
};

const TaskForm: React.FC<TaskFormProps> = ({ task, closeForm }) => {
  const { addTask, updateTask } = useTasks();
  const [form, setForm] = useState<Task>({
    taskId: '',
    title: '',
    description: '',
    date: '',
    priority: 'medium',
    completed: false,
  });

  useEffect(() => {
    if (task) setForm(task);
  }, [task]);

  const handleSubmit = () => {
    if (task?.taskId) {
      updateTask(form);
    } else {
      addTask({ ...form, taskId: crypto.randomUUID() });
    }
    closeForm();
  };

  return (
    <div className="form-container">
      <label>
        Title:
        <input
          value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })}
        />
      </label>

      <label>
        Description:
        <textarea
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })}
        />
      </label>

      <label>
        Date:
        <input
          type="date"
          value={form.date}
          onChange={e => setForm({ ...form, date: e.target.value })}
        />
      </label>

      <label>
        Priority:
        <select
          value={form.priority}
          onChange={e => setForm({ ...form, priority: e.target.value as any })}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>

      <button onClick={handleSubmit}>
        {task?.taskId ? 'Update' : 'Add'} Task
      </button>
    </div>
  );
};

export default TaskForm;
