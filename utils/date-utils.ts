export function getPreviousWeekDateRangeRegex(): RegExp {
  const today = new Date();

  // find Monday from current week
  const currentMonday = new Date(today);
  const day = today.getDay();
  const diffToMonday = day === 0 ? -6 : 1 - day;
  currentMonday.setDate(today.getDate() + diffToMonday);

  // previous Monday and Sunday
  const lastMonday = new Date(currentMonday);
  lastMonday.setDate(currentMonday.getDate() - 7);

  const lastSunday = new Date(currentMonday);
  lastSunday.setDate(currentMonday.getDate() - 1);

  // format date to: M/D/YY
  const formatDate = (date: Date) => {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear().toString().slice(-2);
    return `${month}/${day}/${year}`;
  };

  const start = formatDate(lastMonday);
  const end = formatDate(lastSunday);

  // build expression
  const expectedText = `${start} - ${end} ${start} - ${end.split("/")[0]}/`;

  // change to RegEx
  const escaped = expectedText.replace(/\//g, "\\/");
  return new RegExp(escaped);
}
