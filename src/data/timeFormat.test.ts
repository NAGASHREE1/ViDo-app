import { describe, expect, it } from 'vitest';
import { formatTimeLabel } from './timeFormat';

describe('formatTimeLabel', () => {
  it('converts 24-hour values into friendly 12-hour labels', () => {
    expect(formatTimeLabel('17:00')).toBe('5:00 PM');
    expect(formatTimeLabel('08:05')).toBe('8:05 AM');
    expect(formatTimeLabel('00:15')).toBe('12:15 AM');
    expect(formatTimeLabel('12:00')).toBe('12:00 PM');
    expect(formatTimeLabel('23:59')).toBe('11:59 PM');
  });

  it('handles missing and unexpected values', () => {
    expect(formatTimeLabel('')).toBe('');
    expect(formatTimeLabel(undefined)).toBe('');
    expect(formatTimeLabel('later')).toBe('later');
  });
});
