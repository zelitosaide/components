import { useState } from "react";

import { Button } from "../../components/core/button";

export default function Task({ task, onChange, onDelete }) {
  const [text, setText] = useState(task.text);
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
          type="text"
          value={text}
          onChange={function (e) {
            setText(e.target.value);
          }}
        />
        <Button
          onClick={function () {
            setText(task.text);
            setIsEditing(false);
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={function () {
            setIsEditing(false);
          }}
        >
          Save
        </Button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <Button
          onClick={function () {
            setIsEditing(true);
          }}
        >
          Edit
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
