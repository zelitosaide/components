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
  return (
    <>
      <AddTask />
      <TaskList />
    </>
  );
}
