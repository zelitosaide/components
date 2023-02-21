import Task from "./task";

export default function TaskList({ tasks }) {
  return (
    <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
      {tasks.map(function (task) {
        return (
          <li
            key={task._id}
            style={{
              backgroundColor: "#1D1E22",
              padding: 0,
              margin: 0,
            }}
          >
            <Task task={task} />
          </li>
        );
      })}
    </ul>
  );
}
