// import { createContext, useContext, useState, useEffect, ReactNode } from "react";
// import { Task } from "../types";

// interface TaskContextType {
//   tasks: Task[];
//   addTask: (text: string, time: string) => void;
//   removeTask: (id: number) => void;
// }

// const TaskContext = createContext<TaskContextType | undefined>(undefined);

// export const TaskProvider = ({ children }: { children: ReactNode }) => {
//   const [tasks, setTasks] = useState<Task[]>([]);

//   // On startup, load all tasks from local storage
//   useEffect(() => {
//     const storedTasks = localStorage.getItem("tasks");
//     if (storedTasks) {
//       setTasks(JSON.parse(storedTasks));
//     }
//   }, []);

//   // Save tasks to local storage after changes are made
//   useEffect(() => {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   }, [tasks]);

//   const addTask = (text: string, time: string, category: string, reminderTime?: string) => {
//     const newTasks = [...tasks, { id: Date.now(), text, time, category, reminderTime }];
//     setTasks(newTasks);
//   };

//   const removeTask = (id: number) => {
//     setTasks(tasks.filter((task) => task.id !== id));
//   };

//   return (
//     <TaskContext.Provider value={{ tasks, addTask, removeTask }}>
//       {children}
//     </TaskContext.Provider>
//   );
// };

// export const useTaskContext = () => {
//   const context = useContext(TaskContext);
//   if (!context) {
//     throw new Error("useTaskContext must be used within a TaskProvider");
//   }
//   return context;
// };
