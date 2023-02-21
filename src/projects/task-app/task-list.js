import Task from "./task";

export default function TaskList({ tasks, title }) {
  return (
    <div>
      <h4>{title}</h4>
      <ul
        style={{
          listStyleType: "none",
          margin: 0,
          padding: 0,
          backgroundColor: "#1D1E22",
        }}
      >
        {tasks.map(function (task) {
          return (
            <li
              key={task._id}
              style={{
                padding: 0,
                margin: 0,
              }}
            >
              <Task task={task} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
