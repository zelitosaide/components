export const baseUrl = "http://localhost:5000/v1/";

export async function addTask(task) {
  const response = await fetch(baseUrl + "tasks", {
    method: "POST",
    body: JSON.stringify(task),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return await response.json();
}

export async function changeTask(nextTask) {
  const response = await fetch(baseUrl + "tasks/" + nextTask._id, {
    method: "PATCH",
    body: JSON.stringify(nextTask),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return await response.json();
}

export async function deleteTask(taskId) {
  await fetch(baseUrl + "tasks/" + taskId, {
    method: "DELETE",
  });
}
