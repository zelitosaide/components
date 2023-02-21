import { useTasks } from "../contexts/tasks-context";
import Task from "./task";

export default function TaskList() {
  const tasks = useTasks();

  return (
    <ul style={{ paddingLeft: 20 }}>
      {tasks.map(function (task) {
        return (
          <li key={task._id}>
            <Task task={task} />
          </li>
        );
      })}
    </ul>
  );
}
