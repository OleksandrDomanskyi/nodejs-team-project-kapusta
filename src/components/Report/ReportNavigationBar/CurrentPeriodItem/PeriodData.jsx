export const months = [
  { id: "01", monthTitle: "january" },
  { id: "02", monthTitle: "february"},
  { id: "03", monthTitle: "march" },
  { id: "04", monthTitle: "april" },
  { id: "05", monthTitle: "may" },
  { id: "06", monthTitle: "june" },
  { id: "07", monthTitle: "july" },
  { id: "08", monthTitle: "august" },
  { id: "09", monthTitle: "september" },
  { id: "10", monthTitle: "october" },
  { id: "11", monthTitle: "november" },
  { id: "12", monthTitle: "december" },
];

export const dateNow = new Date();

export function getMonth(number) {
  return months[number];
}