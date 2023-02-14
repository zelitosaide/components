import { useState } from "react";

export default function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;

  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={function (e) {
          onChange({
            ...task,
            done: e.target.checked,
          });
        }}
      />
      {taskContent}
      <button
        onClick={function () {
          onDelete(task._id);
        }}
      >
        Delete
      </button>
    </label>
  );
}
