import { createContext, useContext, useEffect, useReducer } from "react";

import { addTask, baseUrl, changeTask, deleteTask } from "../../api";

const TasksContext = createContext(null);
const TasksEventHandlersContext = createContext(null);

export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  useEffect(function () {
    async function fetchTasks() {
      const response = await fetch(baseUrl + "tasks");
      const tasks = await response.json();
      dispatch({ type: "fetched", tasks: tasks });
    }
    fetchTasks();
  }, []);

  async function handleAddTask(newTask) {
    const task = await addTask({ ...newTask, done: false });
    dispatch({ type: "added", task: task });
  }

  async function handleChangeTask(nextTask) {
    await changeTask(nextTask);
    dispatch({ type: "changed", task: nextTask });
  }

  async function handleDeleteTask(taskId) {
    await deleteTask(taskId);
    dispatch({ type: "deleted", id: taskId });
  }

  return (
    <TasksContext.Provider value={tasks}>
      <TasksEventHandlersContext.Provider
        value={{
          addTask: handleAddTask,
          changeTask: handleChangeTask,
          deleteTask: handleDeleteTask,
        }}
      >
        {children}
      </TasksEventHandlersContext.Provider>
    </TasksContext.Provider>
  );
}

export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksEventHandlers() {
  return useContext(TasksEventHandlersContext);
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case "fetched": {
      return [...tasks, ...action.tasks];
    }
    default: {
      throw new Error("Unknown action: " + action.type);
    }
  }
}
