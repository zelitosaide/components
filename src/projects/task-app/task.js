import { useState } from "react";

import { Button } from "../../components/core/button";
import { Input } from "../../components/core/input";

export default function Task({ task, onChange, onDelete }) {
  const [text, setText] = useState(task.text);
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <Input
          value={text}
          onChange={setText}
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
            onChange({ ...task, text: text });
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
