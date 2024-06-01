interface Params {
  year: string;
  month: string;
  day: string;
  timezone: string;
}

export const fDate = (timestamp: string) => {
  const params: Params = {
    year: "numeric",
    month: "long",
    day: "numeric",
    timezone: "UTC"
  };

  return new Date(timestamp).toLocaleString("ru", params as any);
};
