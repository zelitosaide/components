import { useEffect, useState } from "react";

import AddTask from "./add-task";
import TaskList from "./task-list";

import { addTask, baseUrl, changeTask, deleteTask } from "../../api";

export default function Index() {
  return <TaskApp />;
}

function TaskApp() {
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState("typing");

  const isAdding = status === "adding";

  useEffect(function () {
    async function fetchTasks() {
      const response = await fetch(baseUrl + "tasks");
      const tasks = await response.json();
      setTasks(tasks);
    }
    fetchTasks();
  }, []);

  async function handleAddTask({ text, date, hour, isRepeated }) {
    try {
      setStatus("adding");
      const task = await addTask({
        text: text,
        date: date,
        hour: hour,
        done: false,
        isRepeated: isRepeated,
      });
      setStatus("added");
      setTasks([...tasks, task]);
    } catch (error) {
      console.log(error);
    }
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
    <>
      <AddTask
        onAddTask={handleAddTask}
        isAdding={isAdding}
      />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}
