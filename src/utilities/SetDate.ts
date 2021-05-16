export const SetDate = (date: string) => {
  const months: { [key: string]: string } = {
    x01: "January",
    x02: "february",
    x03: "March",
    x04: "April",
    x05: "May",
    x06: "June",
    x07: "July",
    x08: "August",
    x09: "September",
    x10: "October",
    x11: "November",
    x12: "December",
  };
  return `${months["x" + date.slice(5, 7)]} ${date.slice(8, 10)}, ${date.slice(
    0,
    4
  )}`;
};
