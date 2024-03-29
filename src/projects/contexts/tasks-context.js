import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

import { addTask, baseUrl, changeTask, deleteTask } from "../../api";

const TasksContext = createContext(null);
const TasksEventHandlersContext = createContext(null);
const ErrorContext = createContext(null);

export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, []);
  const [error, setError] = useState(null);

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
        <ErrorContext.Provider value={{ error, setError }}>
          {children}
        </ErrorContext.Provider>
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

export function useError() {
  return useContext(ErrorContext);
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case "fetched": {
      return [...action.tasks];
    }
    case "added": {
      return [...tasks, action.task];
    }
    case "changed": {
      return tasks.map(function (t) {
        if (t._id === action.task._id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter(function (t) {
        return t._id !== action.id;
      });
    }
    default: {
      throw new Error("Unknown action: " + action.type);
    }
  }
}
