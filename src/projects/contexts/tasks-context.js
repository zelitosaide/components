import { createContext, useContext, useEffect, useState } from "react";

import { addTask, baseUrl, changeTask, deleteTask } from "../../api";

const TasksContext = createContext(null);
const TasksEventHandlersContext = createContext(null);

export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksEventHandlers() {
  return useContext(TasksEventHandlersContext);
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

  async function handleAddTask({ text, date, hour, isRepeated }) {
    const task = await addTask({
      text: text,
      date: date,
      hour: hour,
      done: false,
      isRepeated: isRepeated,
    });
    setTasks([...tasks, task]);
  }

  async function handleChangeTask(nextTask) {
    try {
      await changeTask(nextTask);
      setTasks(
        tasks.map(function (t) {
          if (t._id === nextTask._id) {
            return nextTask;
          } else {
            return t;
          }
        })
      );
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDeleteTask(taskId) {
    try {
      await deleteTask(taskId);
      setTasks(
        tasks.filter(function (t) {
          return t._id !== taskId;
        })
      );
    } catch (error) {
      console.log(error);
    }
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
