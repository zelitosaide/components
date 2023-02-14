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
