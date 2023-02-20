import { useState } from "react";

import { Button } from "../../components/core/button";
import { Checkbox } from "../../components/core/checkbox";
import { Input } from "../../components/core/input";
import { checkExpirationDate, formatDate } from "../../utils/utils";
import { useTasksEventHandlers } from "../contexts/tasks-context";

export default function Task({ task }) {
  const [text, setText] = useState(task.text);
  const [date, setDate] = useState(task.date);
  const [hour, setHour] = useState(task.hour);
  const [isEditing, setIsEditing] = useState(false);
  const { changeTask, deleteTask } = useTasksEventHandlers();
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("idle");
  const isPending = status === "pending";

  const isExpired = checkExpirationDate(task.date);

  let taskContent;
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
            value={date}
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
          <span
            style={{
              background: isExpired ? "#ffcccc" : "#d4f8d3",
              padding: "1px 4px",
            }}
          >
            {hour}
          </span>
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
              changeTask({
                ...task,
                isRepeated: e.target.checked,
              });
            }}
            disabled={isPending}
          />
          Repeat
        </label>
      </p>
      <p style={{ margin: "2px 0px" }}>
        <label style={{ fontSize: 12 }}>
          <Checkbox
            value={task.done}
            onChange={function (e) {
              changeTask({
                ...task,
                done: e.target.checked,
              });
            }}
            disabled={isPending}
          />
          Complete
        </label>
      </p>
      <p style={{ margin: "5px 0" }}>
        <Button
          onClick={function () {
            if (isEditing) {
              setIsEditing(false);
              changeTask({
                ...task,
                text: text,
                date: date,
                hour: hour,
              });
            } else {
              setIsEditing(true);
            }
          }}
          disabled={isPending}
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
          onClick={async function () {
            try {
              setStatus("pending");
              setError(null);
              await deleteTask(task._id);
            } catch (error) {
              setError(error.message);
            } finally {
              setStatus("idle");
            }
          }}
          disabled={isPending}
        >
          {isPending ? "Delete..." : "Delete"}
        </Button>
      </p>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
}
