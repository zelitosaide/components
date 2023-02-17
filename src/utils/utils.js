export function formatDate(date) {
  return date.toISOString().split("T")[0];
}

export function formatTime(date) {
  return date
    .toLocaleTimeString()
    .split(" ")[0]
    .split(":")
    .slice(0, 2)
    .join(":");
}

export function formatDateIntl(date) {
  return new Intl.DateTimeFormat("pt-PT", { dateStyle: "short" }).format(date);
}
