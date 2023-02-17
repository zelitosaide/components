import { useState } from "react";

import { Button } from "../../components/core/button";
import { Input } from "../../components/core/input";
import { formatDate, formatDateForInputField } from "../../utils/utils";

export default function Task({ task, onChange, onDelete }) {
  const [text, setText] = useState(task.text);
  const [date, setDate] = useState(task.date);
  const [hour, setHour] = useState(task.hour);
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <p>
          <Input
            value={text}
            onChange={setText}
          />
        </p>
        <p>
          <Input
            type="date"
            value={formatDateForInputField(new Date(date))}
            onChange={setDate}
          />
        </p>
        <p>
          <Input
            type="time"
            value={hour}
            onChange={setHour}
          />
        </p>
      </>
    );
  } else {
    taskContent = (
      <>
        <p>{text}</p>
        <p>{formatDate(new Date(date))}</p>
        <p>{hour}</p>
      </>
    );
  }

  return (
    <>
      {taskContent}
      <p>
        <label>
          <input
            type="checkbox"
            checked={task.isRepeated}
            onChange={function (e) {
              onChange({
                ...task,
                isRepeated: e.target.checked,
              });
            }}
          />
          Repeat
        </label>
      </p>
      <p>
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
          Complete
        </label>
      </p>
      <p>
        <Button
          onClick={function () {
            if (isEditing) {
              setIsEditing(false);
              onChange({
                ...task,
                text: text,
                date: date,
                hour: hour,
              });
            } else {
              setIsEditing(true);
            }
          }}
        >
          {isEditing ? "Save" : "Edit"}
        </Button>
        {isEditing && (
          <Button
            onClick={function () {
              setIsEditing(false);
              setText(task.text);
              setDate(task.date);
              setHour(task.hour);
            }}
          >
            Cancel
          </Button>
        )}
        <Button
          onClick={function () {
            onDelete(task._id);
          }}
        >
          Delete
        </Button>
      </p>
    </>
  );
}
