export const holidays = {
  2024: [
    { date: "2024-01-26", name: "Republic Day" },
    { date: "2024-03-25", name: "Holi" },
    { date: "2024-08-15", name: "Independence Day" },
    { date: "2024-10-02", name: "Gandhi Jayanti" },
    { date: "2024-12-25", name: "Christmas" },
    // Add more holidays as needed
  ],
};

export const isHoliday = (date) => {
  const year = date.getFullYear();
  const dateString = date.toISOString().split("T")[0];
  return holidays[year]?.find((h) => h.date === dateString);
};
