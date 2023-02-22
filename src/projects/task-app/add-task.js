import { useState } from "react";

import { Button } from "../../components/core/button";
import { Checkbox } from "../../components/core/checkbox";
import { Input } from "../../components/core/input";
import {
  formatDateForInputField,
  formatTimeForInputField,
} from "../../utils/utils";
import { useError, useTasksEventHandlers } from "../contexts/tasks-context";

export default function AddTask() {
  const [text, setText] = useState("");
  const [date, setDate] = useState(formatDateForInputField(new Date()));
  const [hour, setHour] = useState(formatTimeForInputField(new Date()));
  const [isRepeated, setIsRepeated] = useState(false);
  const [status, setStatus] = useState("typing");
  const { setError } = useError();
  const isAdding = status === "adding";
  const [showForm, setShowForm] = useState(false);

  const { addTask } = useTasksEventHandlers();

  function resetFields() {
    setText("");
    setDate("");
    setHour("");
    setIsRepeated(false);
  }

  return (
    <div style={{ margin: 20 }}>
      {showForm && (
        <>
          <label style={{ display: "block", marginBottom: 10 }}>
            Task:{" "}
            <Input
              value={text}
              onChange={function (e) {
                setText(e.target.value);
              }}
              disabled={isAdding}
            />
          </label>
          <label style={{ display: "block", marginBottom: 10 }}>
            Date:{" "}
            <Input
              type="date"
              label="Date"
              value={date}
              onChange={function (e) {
                setDate(e.target.value);
              }}
              disabled={isAdding}
            />
          </label>
          <label style={{ display: "block", marginBottom: 10 }}>
            Hour:{" "}
            <Input
              type="time"
              label="Hour"
              value={hour}
              onChange={function (e) {
                setHour(e.target.value);
              }}
              disabled={isAdding}
            />
          </label>
          <label style={{ display: "block", marginBottom: 10 }}>
            <Checkbox
              value={isRepeated}
              onChange={function (e) {
                setIsRepeated(e.target.checked);
              }}
              disabled={isAdding}
            />
            Repeat
          </label>
        </>
      )}
      <Button
        disabled={isAdding}
        onClick={async function () {
          setStatus("adding");
          setError(null);
          try {
            await addTask({ text, date, hour, isRepeated });
            resetFields();
          } catch (error) {
            setError(error.message);
          } finally {
            setStatus("typing");
          }
        }}
      >
        {isAdding ? "Adding task..." : "Add task"}
      </Button>
    </div>
  );
}
