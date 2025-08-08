import { describe, it, expect } from 'vitest';
import { getPreviousWeekDateRangeRegex } from '../utils/date-utils';

describe('getPreviousWeekDateRangeRegex @unit', () => {
  it('should return a valid regex matching the expected text pattern @unit', () => {
    const regex = getPreviousWeekDateRangeRegex();

    const today = new Date();

    const currentMonday = new Date(today);
    const day = today.getDay();
    const diffToMonday = (day === 0 ? -6 : 1 - day);
    currentMonday.setDate(today.getDate() + diffToMonday);

    const lastMonday = new Date(currentMonday);
    lastMonday.setDate(currentMonday.getDate() - 7);

    const lastSunday = new Date(currentMonday);
    lastSunday.setDate(currentMonday.getDate() - 1);

    const formatDate = (date: Date) => {
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const year = date.getFullYear().toString().slice(-2);
      return `${month}/${day}/${year}`;
    };

    const start = formatDate(lastMonday);
    const end = formatDate(lastSunday);
    const expectedText = `${start} - ${end} ${start} - ${end.split('/')[0]}/`;

    expect(expectedText).toMatch(regex);
    console.log(expectedText);
  });
});
