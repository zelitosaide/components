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
  const tasks = useTasks();
  const { error } = useError();

  const uncompletedTasks = tasks.filter(function (task) {
    return !task.done;
  });

  const completedTasks = tasks.filter(function (task) {
    return task.done;
  });

  return (
    <>
      <AddTask />
      <h3>Uncompleted tasks</h3>
      <TaskList tasks={uncompletedTasks} />
      {completedTasks.length > 0 && (
        <>
          <h3>Completed tasks</h3>
          <TaskList tasks={completedTasks} />
        </>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
}
