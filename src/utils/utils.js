export function formatDateForInputField(date) {
  return date.toISOString().slice(0, 10);
}

export function formatTimeForInputField(date) {
  return new Intl.DateTimeFormat("pt-PT", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

export function formatDate(date) {
  return new Intl.DateTimeFormat("pt-PT", { dateStyle: "full" }).format(date);
}
