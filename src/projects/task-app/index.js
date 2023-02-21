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
    <div style={{ color: "hsla(0, 0%, 100%, 0.7)" }}>
      <AddTask />
      {uncompletedTasks.length > 0 && (
        <>
          <TaskList
            tasks={uncompletedTasks}
            title="Uncompleted tasks"
          />
        </>
      )}
      {completedTasks.length > 0 && (
        <>
          <h3>Completed tasks</h3>
          <TaskList tasks={completedTasks} />
        </>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
