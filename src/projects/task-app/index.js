import AddTask from "./add-task";
import TaskList from "./task-list";

import { TasksProvider, useError, useTasks } from "../contexts/tasks-context";

export default function Index() {
  return (
    <TasksProvider>
      <TaskApp />
    </TasksProvider>
  );
}

function TaskApp() {
  const { error } = useError();
  const tasks = useTasks();

  return (
    <>
      <AddTask />
      <h3>Uncompleted tasks</h3>
      <TaskList tasks={tasks} />
      <h3>Completed tasks</h3>
      <TaskList tasks={tasks} />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
}
