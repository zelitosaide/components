import { useTasks } from "../contexts/tasks-context";
import Task from "./task";

export default function TaskList({ onChangeTask, onDeleteTask }) {
  const tasks = useTasks();

  return (
    <ul>
      {tasks.map(function (task) {
        return (
          <li key={task._id}>
            <Task
              task={task}
              onChange={onChangeTask}
              onDelete={onDeleteTask}
            />
          </li>
        );
      })}
    </ul>
  );
}
