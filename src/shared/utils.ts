export const transformToISOString = (date:Date) => new Date(date.getTime()
 - (date.getTimezoneOffset() * 60000)).toISOString();
