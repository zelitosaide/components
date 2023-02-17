export function formatDate(date) {
  return date.toISOString().split("T")[0];
}

export function formatTime(date) {
  return date.toISOString().slice(11, 16);
}

export function formatDateIntl(date) {
  return new Intl.DateTimeFormat("pt-PT", { dateStyle: "short" }).format(date);
}
