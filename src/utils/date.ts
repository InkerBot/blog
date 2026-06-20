export function formatDate(date: Date): string {
  return `${date.getUTCFullYear()}年${date.getUTCMonth() + 1}月${date.getUTCDate()}日`;
}

export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}
