/**
 * Converts a stored `HH:mm` time into a friendly 12-hour label.
 * Times are stored in 24-hour form; the UI shows them in 12-hour form.
 */
export function formatTimeLabel(value?: string): string {
  if (!value) return '';

  const [hours, minutes] = value.split(':').map(Number);
  if (!Number.isFinite(hours)) return value;

  const hour = hours % 12 === 0 ? 12 : hours % 12;
  const mins = Number.isFinite(minutes) ? minutes : 0;
  const meridiem = hours < 12 ? 'AM' : 'PM';

  return `${hour}:${String(mins).padStart(2, '0')} ${meridiem}`;
}
