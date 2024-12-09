export const formatDate = (date: Date, locale: string = "en-US"): string => {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
};
