import Task from "./task";

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
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
