import { useState } from "react";

import { Button } from "../../components/core/button";
import { Input } from "../../components/core/input";
import { formatDate } from "../../utils/utils";

export default function AddTask({ onAddTask, isAdding }) {
  const [text, setText] = useState("");
  const [date, setDate] = useState(formatDate(new Date()));
  const [hour, setHour] = useState("");
  const [isRepeated, setIsRepeated] = useState(false);

  return (
    <>
      <Input
        label="Add task"
        value={text}
        onChange={setText}
        disabled={isAdding}
      />
      <label style={{ display: "block" }}>
        Date:{" "}
        <Input
          type="date"
          label="Date"
          value={date}
          onChange={setDate}
          disabled={isAdding}
        />
      </label>
      <label style={{ display: "block" }}>
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
        Repeat{" "}
        <input
          type="checkbox"
          checked={isRepeated}
          onChange={function (e) {
            setIsRepeated(e.target.checked);
          }}
        />
      </label>
      <Button
        onClick={function () {
          setText("");
          onAddTask({ text, date, hour });
        }}
        disabled={isAdding}
      >
        {isAdding ? "Adding..." : "Add"}
      </Button>
    </>
  );
}
