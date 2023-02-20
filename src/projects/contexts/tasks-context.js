import { createContext, useContext, useState } from "react";

const TasksContext = createContext(null);

export function useTasks() {
  return useContext(TasksContext);
}

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  return (
    <TasksContext.Provider value={tasks}>{children}</TasksContext.Provider>
  );
}
