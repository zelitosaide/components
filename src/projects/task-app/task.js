import { useState } from "react";
import { Button } from "../../components/core/button";

export default function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
          type="text"
          value={task.text}
          onChange={function (e) {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <Button
          onClick={function () {
            setIsEditing(false);
          }}
        >
          Save
        </Button>
      </>
    );
  }

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
      <Button
        onClick={function () {
          onDelete(task._id);
        }}
      >
        Delete
      </Button>
    </label>
  );
}
