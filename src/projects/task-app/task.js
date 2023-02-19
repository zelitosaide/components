import { useState } from "react";

import { Button } from "../../components/core/button";
import { Checkbox } from "../../components/core/checkbox";
import { Input } from "../../components/core/input";
import {
  checkExpirationDateTime,
  formatDate,
  formatDateForInputField,
} from "../../utils/utils";

export default function Task({ task, onChange, onDelete }) {
  const [text, setText] = useState(task.text);
  const [date, setDate] = useState(task.date);
  const [hour, setHour] = useState(task.hour);
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  const isExpired = checkExpirationDateTime(new Date(task.date));

  if (isEditing) {
    taskContent = (
      <>
        <p style={{ margin: "5px 0px" }}>
          <Input
            value={text}
            onChange={function (e) {
              setText(e.target.value);
            }}
          />
        </p>
        <p style={{ margin: "5px 0px" }}>
          <Input
            type="date"
            value={formatDateForInputField(new Date(date))}
            onChange={function (e) {
              setDate(e.target.value);
            }}
          />
        </p>
        <p style={{ margin: "5px 0px" }}>
          <Input
            type="time"
            value={hour}
            onChange={function (e) {
              setHour(e.target.value);
            }}
          />
        </p>
      </>
    );
  } else {
    taskContent = (
      <>
        <p style={{ margin: "5px 0px" }}>{text}</p>
        <p style={{ margin: "5px 0px", fontSize: 12 }}>
          <span
            style={{
              background: isExpired ? "#ffcccc" : "#d4f8d3",
              padding: "1px 4px",
            }}
          >
            {formatDate(new Date(date))}
          </span>
        </p>
        <p style={{ margin: "5px 0px", fontSize: 12 }}>
          <span style={{ background: "pink", padding: "1px 4px" }}>{hour}</span>
        </p>
      </>
    );
  }

  return (
    <>
      {taskContent}
      <p style={{ margin: "2px 0px" }}>
        <label style={{ fontSize: 12 }}>
          <Checkbox
            value={task.isRepeated}
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
      <p style={{ margin: "2px 0px" }}>
        <label style={{ fontSize: 12 }}>
          <Checkbox
            value={task.done}
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
      <p style={{ margin: "5px 0" }}>
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
