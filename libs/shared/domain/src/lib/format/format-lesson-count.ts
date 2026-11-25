export function formatLessonCount(count: number): string {
  if (count === 0) {
    return 'No lessons yet';
  }
  return count === 1 ? '1 lesson' : `${count} lessons`;
}