import { useEffect, useState } from "react";

import AddTask from "./add-task";
import TaskList from "./task-list";

import { baseUrl } from "../../api";

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

  async function handleAddTask(text) {
    try {
      setStatus("adding");
      const response = await fetch(baseUrl + "tasks", {
        method: "POST",
        body: JSON.stringify({ text: text, done: false }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const task = await response.json();
      setStatus("added");
      setTasks([...tasks, task]);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleChangeTask(nextTask) {
    try {
      const response = await fetch(baseUrl + "tasks/" + nextTask._id, {
        method: "PATCH",
        body: JSON.stringify(nextTask),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const task = await response.json();
      setTasks(
        tasks.map(function (t) {
          if (t._id === task._id) {
            return task;
          } else {
            return t;
          }
        })
      );
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDeleteTask(taskId) {}

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
