import { formatLessonCount } from './format-lesson-count';

describe('formatLessonCount', () => {
  it('uses the singular for one lesson', () => {
    expect(formatLessonCount(1)).toBe('1 lesson');
  });

  it('uses the plural for several lessons', () => {
    expect(formatLessonCount(3)).toBe('3 lessons');
  });

  it('shows a friendly message when there are no lessons', () => {
    expect(formatLessonCount(0)).toBe('No lessons yet');
  });
});
