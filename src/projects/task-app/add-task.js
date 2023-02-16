import { useState } from "react";

import { Button } from "../../components/core/button";
import { Input } from "../../components/core/input";
import { formatDate, formatTime } from "../../utils/utils";

export default function AddTask({ onAddTask, isAdding }) {
  const [text, setText] = useState("");
  const [date, setDate] = useState(formatDate(new Date()));
  const [hour, setHour] = useState(formatTime(new Date()));

  return (
    <>
      <Input
        label="Add task"
        value={text}
        onChange={setText}
        disabled={isAdding}
      />
      <Input
        type="date"
        label="Date"
        value={date}
        onChange={setDate}
        disabled={isAdding}
      />
      <Input
        type="time"
        label="Hour"
        value={hour}
        onChange={setHour}
        disabled={isAdding}
      />
      <Button
        onClick={function () {
          setText("");
          onAddTask(text);
        }}
        disabled={isAdding}
      >
        {isAdding ? "Adding..." : "Add"}
      </Button>
    </>
  );
}
