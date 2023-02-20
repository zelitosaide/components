import { createContext, useContext, useEffect, useState } from "react";

import { baseUrl } from "../../api";

const TasksContext = createContext(null);

export function useTasks() {
  return useContext(TasksContext);
}

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  useEffect(function () {
    async function fetchTasks() {
      const response = await fetch(baseUrl + "tasks");
      const tasks = await response.json();
      setTasks(tasks);
    }
    fetchTasks();
  }, []);

  return (
    <TasksContext.Provider value={tasks}>{children}</TasksContext.Provider>
  );
}
