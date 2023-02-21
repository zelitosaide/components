import AddTask from "./add-task";
import TaskList from "./task-list";

import { TasksProvider, useError } from "../contexts/tasks-context";

export default function Index() {
  return (
    <TasksProvider>
      <TaskApp />
    </TasksProvider>
  );
}

function TaskApp() {
  const { error } = useError();

  return (
    <>
      <AddTask />
      <TaskList />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
}
