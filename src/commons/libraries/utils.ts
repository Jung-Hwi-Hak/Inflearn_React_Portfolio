export const getDate = (date: any): string => {
  const _date = new Date(date);
  const yyyy = _date.getFullYear();
  const mm = _date.getMonth() + 1;
  const dd = _date.getDate();
  return `${yyyy}-${mm}-${dd}`;
};

export const getDateHour = (): string => {
  const TIME_ZONE = 9 * 60 * 60 * 1000; // 9시간

  const date = new Date();

  const result = new Date(date.getTime() + TIME_ZONE)
    .toISOString()
    .replace("T", " ")
    .slice(0, -5);

  return String(result);
};
