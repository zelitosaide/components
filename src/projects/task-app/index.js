import { useState } from "react";

import AddTask from "./add-task";
import TaskList from "./task-list";

import { TasksProvider } from "../contexts/tasks-context";

export default function Index() {
  return (
    <TasksProvider>
      <TaskApp />
    </TasksProvider>
  );
}

function TaskApp() {
  const [error, setError] = useState(null);

  return (
    <>
      <AddTask />
      <TaskList
        error={error}
        setError={setError}
      />
    </>
  );
}
