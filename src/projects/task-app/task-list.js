import Task from "./task";

export default function TaskList({ tasks, title }) {
  return (
    <div style={{ backgroundColor: "#1D1E22" }}>
      <h2 style={{ color: "white", fontSize: 14, fontWeight: 500 }}>{title}</h2>
      <ul
        style={{
          listStyleType: "none",
          margin: 0,
          padding: 0,
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
