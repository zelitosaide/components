import { useState } from "react";

import { Button } from "../../components/core/button";
import { Input } from "../../components/core/input";
import {
  formatDate,
  formatDateForInputField,
  formatTimeForInputField,
} from "../../utils/utils";

export default function Task({ task, onChange, onDelete }) {
  const [text, setText] = useState(task.text);
  const [date, setDate] = useState(task.date);
  const [hour, setHour] = useState(task.hour);
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <p>
          <Input
            value={text}
            onChange={setText}
          />
        </p>
        <p>
          <Input
            type="date"
            value={formatDateForInputField(new Date(date))}
            onChange={setDate}
          />
        </p>
        <p>
          <Input
            type="time"
            value={hour}
            onChange={setHour}
          />
        </p>
      </>
    );
  } else {
    taskContent = (
      <>
        <p>{text}</p>
        <p>{formatDate(new Date(date))}</p>
        <p>{hour}</p>
      </>
    );
  }

  return (
    <>
      {taskContent}
      <p>
        <label>
          <input
            type="checkbox"
            checked={task.isRepeated}
            onChange={function (e) {
              onChange({
                ...task,
                isRepeated: e.target.checked,
              });
            }}
          />
          Repeat
        </label>
      </p>
      <p>
        <label>
          <input
            type="checkbox"
            checked={task.done}
            onChange={function (e) {
              onChange({
                ...task,
                done: e.target.checked,
              });
            }}
          />
          Complete
        </label>
      </p>
      <p>
        <Button
          onClick={function () {
            if (isEditing) {
              setIsEditing(false);
            } else {
              setIsEditing(true);
            }
          }}
        >
          {isEditing ? "Save" : "Edit"}
        </Button>
        <Button>Delete</Button>
      </p>
    </>
  );
  // const [isEditing, setIsEditing] = useState(false);
  // let taskContent;

  // if (isEditing) {
  //   taskContent = (
  //     <>
  //       <Input
  //         value={text}
  //         onChange={setText}
  //       />
  //       <Button
  //         onClick={function () {
  //           setText(task.text);
  //           setIsEditing(false);
  //         }}
  //       >
  //         Cancel
  //       </Button>
  //       <Button
  //         onClick={function () {
  //           setIsEditing(false);
  //           onChange({ ...task, text: text });
  //         }}
  //       >
  //         Save
  //       </Button>
  //     </>
  //   );
  // } else {
  //   taskContent = (
  //     <>
  //       {task.text}
  //       <Button
  //         onClick={function () {
  //           setIsEditing(true);
  //         }}
  //       >
  //         Edit
  //       </Button>
  //     </>
  //   );
  // }

  // return (
  //   <label>
  //     <input
  //       type="checkbox"
  //       checked={task.done}
  //       onChange={function (e) {
  //         onChange({
  //           ...task,
  //           done: e.target.checked,
  //         });
  //       }}
  //     />
  //     {taskContent}
  //     <div>{formatDateIntl(new Date(task.date))}</div>
  //     <div>{task.hour}</div>
  //     <Button
  //       onClick={function () {
  //         onDelete(task._id);
  //       }}
  //     >
  //       Delete
  //     </Button>
  //   </label>
  // );
}
