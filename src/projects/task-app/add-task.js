import { useState } from "react";

import { Button } from "../../components/core/button";
import { Input } from "../../components/core/input";
import {
  formatDateForInputField,
  formatTimeForInputField,
} from "../../utils/utils";

export default function AddTask({ onAddTask, isAdding }) {
  const [text, setText] = useState("");
  const [date, setDate] = useState(formatDateForInputField(new Date()));
  const [hour, setHour] = useState(formatTimeForInputField(new Date()));
  const [isRepeated, setIsRepeated] = useState(false);

  return (
    <>
      <label style={{ display: "block", marginBottom: 10 }}>
        Task:{" "}
        <Input
          value={text}
          onChange={setText}
          disabled={isAdding}
        />
      </label>
      <label style={{ display: "block", marginBottom: 10 }}>
        Date:{" "}
        <Input
          type="date"
          label="Date"
          value={date}
          onChange={setDate}
          disabled={isAdding}
        />
      </label>
      <label style={{ display: "block", marginBottom: 10 }}>
        Hour:{" "}
        <Input
          type="time"
          label="Hour"
          value={hour}
          onChange={setHour}
          disabled={isAdding}
        />
      </label>
      <label style={{ display: "block" }}>
        <input
          type="checkbox"
          checked={isRepeated}
          onChange={function (e) {
            setIsRepeated(e.target.checked);
          }}
        />
        Repeat
      </label>
      <Button
        onClick={function () {
          setText("");
          onAddTask({ text, date, hour, isRepeated });
        }}
        disabled={isAdding}
      >
        {isAdding ? "Adding..." : "Add"}
      </Button>
    </>
  );
}
