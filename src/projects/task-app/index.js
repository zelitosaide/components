import { useState } from "react";

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

  async function handleAddTask(text) {
    try {
      setStatus("adding");
      const task = { text: text, done: false };
      await fetch(baseUrl + "tasks", {
        method: "POST",
        body: JSON.stringify(task),
      });
      setStatus("added");
      setTasks([...tasks, task]);
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
      <TaskList />
    </>
  );
}
