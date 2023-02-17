export function formatDate(date) {
  return date.toISOString().slice(0, 10);
}

export function formatTime(date) {
  // return date.toISOString().slice(11, 16);
  return new Intl.DateTimeFormat("pt-PT", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

export function formatDateIntl(date) {
  return new Intl.DateTimeFormat("pt-PT", { dateStyle: "full" }).format(date);
}
