import { createContext, useState } from "react";

const TasksContext = createContext(null);

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  return (
    <TasksContext.Provider value={tasks}>{children}</TasksContext.Provider>
  );
}
