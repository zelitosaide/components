import { useState } from "react";

import { Button } from "../../components/core/button";

export default function AddTask({ onAddTask, isAdding }) {
  const [text, setText] = useState("");

  return (
    <>
      <input
        disabled={isAdding}
        type="text"
        placeholder="Add task"
        value={text}
        onChange={function (e) {
          setText(e.target.value);
        }}
      />
      <Button
        onClick={function () {
          setText("");
          onAddTask(text);
        }}
        disabled={isAdding}
      >
        Add
      </Button>
    </>
  );
}
