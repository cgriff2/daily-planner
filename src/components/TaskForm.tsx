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
    if (task) {
      setForm(task);
    } else {
      setForm({
        taskId: '',
        title: '',
        description: '',
        date: '',
        priority: 'medium',
        completed: false,
      });
    }
  }, [task]);

  const handleSubmit = () => {
    if (!form.title.trim() || !form.date) {
      alert('Please enter a title and date.');
      return;
    }

    if (task?.taskId) {
      updateTask(form);
    } else {
      addTask({ ...form, taskId: crypto.randomUUID() });
    }
    closeForm();
  };

  return (
    <div className="form-container">
      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
        <label>
          Title:
          <input
            value={form.title}
            onChange={e => setForm({ ...form, title: e.target.value })}
            required
            placeholder="Enter task title"
          />
        </label>

        <label>
          Description:
          <textarea
            value={form.description}
            onChange={e => setForm({ ...form, description: e.target.value })}
            placeholder="Enter details"
          />
        </label>

        <label>
          Date:
          <input
            type="date"
            value={form.date}
            onChange={e => setForm({ ...form, date: e.target.value })}
            required
          />
        </label>

        <label>
          Priority:
          <select
            value={form.priority}
            onChange={e =>
              setForm({ ...form, priority: e.target.value as Task['priority'] })
            }
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>

        <div className="button-group">
          <button type="button" className="red" onClick={closeForm}>Cancel</button>
          <button type="submit" className="green" >{task?.taskId ? 'Update' : 'Add'} Task</button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
