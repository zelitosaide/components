export function formatDate(date) {
  return date.toISOString().slice(0, 10);
}

export function formatTime(date) {
  return date.toISOString().slice(11, 16);
}

export function formatDateIntl(date) {
  return new Intl.DateTimeFormat("pt-PT", { dateStyle: "full" }).format(date);
}
