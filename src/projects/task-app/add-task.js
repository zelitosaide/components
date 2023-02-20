import { useState } from "react";

import { Button } from "../../components/core/button";
import { Checkbox } from "../../components/core/checkbox";
import { Input } from "../../components/core/input";
import {
  formatDateForInputField,
  formatTimeForInputField,
} from "../../utils/utils";
import { useTasksEventHandlers } from "../contexts/tasks-context";

export default function AddTask() {
  const [text, setText] = useState("");
  const [date, setDate] = useState(formatDateForInputField(new Date()));
  const [hour, setHour] = useState(formatTimeForInputField(new Date()));
  const [isRepeated, setIsRepeated] = useState(false);
  const [status, setStatus] = useState("typing");
  const [error, setError] = useState(null);
  const isAdding = status === "adding";

  const { addTask } = useTasksEventHandlers();

  function resetStates() {
    setText("");
    setDate("");
    setHour("");
    setIsRepeated(false);
  }

  return (
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
        />
        Repeat
      </label>
      <Button
        onClick={async function () {
          setStatus("adding");
          try {
            await addTask({ text, date, hour, isRepeated });
            resetStates();
          } catch (error) {
            setError(error.message);
          } finally {
            setStatus("typing");
          }
        }}
        disabled={isAdding}
      >
        {isAdding ? "Adding task..." : "Add task"}
      </Button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
}
