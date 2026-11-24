/**
 * Turns a number of minutes into a short label for course cards.
 *   45  → '45m'
 *   120 → '2h'
 *   95  → '1h 35m'
 */
export function formatDuration(totalMinutes: number): string {
  if (totalMinutes < 0) {
    throw new Error('Duration cannot be negative');
  }

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (hours === 0) {
    return `${minutes}m`;
  }
  if (minutes === 0) {
    return `${hours}h`;
  }
  return `${hours}h ${minutes}m`;
}
