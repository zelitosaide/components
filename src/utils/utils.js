export function formatDate(date) {
  return date.toISOString().split("T")[0];
}

export function formatTime(date) {
  new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
  }).format(date);
}
