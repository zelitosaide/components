import { useState } from "react";

import { Button } from "../../components/core/button";
import { Input } from "../../components/core/input";

export default function AddTask({ onAddTask, isAdding }) {
  const [text, setText] = useState("");

  return (
    <>
      <Input
        value={text}
        onChange={setText}
        disabled={isAdding}
      />
      <input placeholder="Add task" />
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
