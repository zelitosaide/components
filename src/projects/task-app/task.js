import { useState } from "react";

import { Button } from "../../components/core/button";
import { Checkbox } from "../../components/core/checkbox";
import { Input } from "../../components/core/input";
import { checkExpirationDate, formatDate } from "../../utils/utils";
import { useError, useTasksEventHandlers } from "../contexts/tasks-context";

export default function Task({ task }) {
  const [text, setText] = useState(task.text);
  const [date, setDate] = useState(task.date);
  const [hour, setHour] = useState(task.hour);
  const [isEditing, setIsEditing] = useState(false);
  const { changeTask, deleteTask } = useTasksEventHandlers();
  const [status, setStatus] = useState("idle");
  const [pressedComponent, setPressedComponent] = useState("");
  const isPending = status === "pending";
  const { setError } = useError();

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
            disabled={isPending}
          />
        </p>
        <p style={{ margin: "5px 0px" }}>
          <Input
            type="date"
            value={date}
            onChange={function (e) {
              setDate(e.target.value);
            }}
            disabled={isPending}
          />
        </p>
        <p style={{ margin: "5px 0px" }}>
          <Input
            type="time"
            value={hour}
            onChange={function (e) {
              setHour(e.target.value);
            }}
            disabled={isPending}
          />
        </p>
      </>
    );
  } else {
    taskContent = (
      <>
        <span style={{ fontSize: 12 }}>{text}</span>
        <i
          style={{
            color: isExpired ? "#fd8468" : "hsla(0, 0%, 100%, 0.4)",
            fontSize: 11,
            display: "block",
            marginLeft: 26,
            marginTop: 4,
            fontWeight: 300,
          }}
        >
          {formatDate(new Date(date))}, {hour}
        </i>
      </>
    );
  }

  return (
    <>
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

      <p style={{ margin: "5px 0" }}>
        <Button
          onClick={async function () {
            if (isEditing) {
              try {
                setStatus("pending");
                setPressedComponent("save");
                setError(null);
                await changeTask({ ...task, text, date, hour });
                setIsEditing(false);
              } catch (error) {
                setError(error.message);
              } finally {
                setStatus("idle");
                setPressedComponent("");
              }
            } else {
              setIsEditing(true);
            }
          }}
          disabled={isPending}
        >
          {isEditing
            ? pressedComponent === "save"
              ? "Save..."
              : "Save"
            : "Edit"}
        </Button>
        {isEditing && (
          <Button
            disabled={isPending}
            style={{ backgroundColor: "rgb(252, 88, 50)" }}
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
              setPressedComponent("delete");
              setError(null);
              await deleteTask(task._id);
            } catch (error) {
              setError(error.message);
            } finally {
              setStatus("idle");
              setPressedComponent("");
            }
          }}
          disabled={isPending}
        >
          {pressedComponent === "delete" ? "Delete..." : "Delete"}
        </Button>
      </p>
    </>
  );
}
