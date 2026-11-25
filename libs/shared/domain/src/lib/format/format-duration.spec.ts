import { formatDuration } from './format-duration';

describe('formatDuration', () => {
  it('shows only minutes when under an hour', () => {
    expect(formatDuration(45)).toBe('45m');
  });

  it('shows only hours when there are no extra minutes', () => {
    expect(formatDuration(120)).toBe('2h');
  });

  it('shows hours and minutes', () => {
    expect(formatDuration(95)).toBe('1h 35m');
  });

  it('shows 0m for zero', () => {
    expect(formatDuration(0)).toBe('0m');
  });

  it('rejects negative durations', () => {
    expect(() => formatDuration(-5)).toThrow('Duration cannot be negative');
  });
  it('shows exactly one hour', () => {
    expect(formatDuration(60)).toBe('1h');
  });
});
