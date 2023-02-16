import { useState } from "react";

import { Button } from "../../components/core/button";
import { Input } from "../../components/core/input";

export default function AddTask({ onAddTask, isAdding }) {
  const [text, setText] = useState("");
  const [startAt, setStartAt] = useState(
    new Date().toISOString().split("T")[0]
  );

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
        label="Start Date"
        value={startAt}
        onChange={setStartAt}
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
