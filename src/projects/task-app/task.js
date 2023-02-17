import { useState } from "react";

import { Button } from "../../components/core/button";
import { Input } from "../../components/core/input";
import { formatDate } from "../../utils/utils";

export default function Task({ task, onChange, onDelete }) {
  const [text, setText] = useState(task.text);
  const [date, setDate] = useState(task.date);
  const [hour, setHour] = useState(task.hour);

  return (
    <>
      <p>{text}</p>
      <p>{formatDate(new Date(date))}</p>
      <p>{hour}</p>
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
