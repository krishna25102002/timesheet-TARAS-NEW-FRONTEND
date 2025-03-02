import { isHoliday } from "./holidayUtils";

export const generateWeeks = (year) => {
  const weeks = [];
  const startDate = new Date(year, 0, 1);
  const endDate = new Date(year, 11, 31);

  // Adjust start date to first Monday if necessary
  while (startDate.getDay() !== 1) {
    startDate.setDate(startDate.getDate() + 1);
  }

  let currentDate = new Date(startDate);
  let weekNumber = 1;

  while (currentDate <= endDate) {
    const weekStart = new Date(currentDate);
    const weekEnd = new Date(currentDate);
    weekEnd.setDate(weekEnd.getDate() + 4); // Add 4 days to get to Friday

    const workDays = [];
    let tempDate = new Date(weekStart);

    for (let i = 0; i < 5; i++) {
      const holiday = isHoliday(tempDate);
      workDays.push({
        day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"][i],
        date: new Date(tempDate),
        isHoliday: !!holiday,
        holidayName: holiday?.name,
      });
      tempDate.setDate(tempDate.getDate() + 1);
    }

    const weekString = `Week ${String(weekNumber).padStart(
      2,
      "0"
    )} (${weekStart.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
    })} Mon - ${weekEnd.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
    })} Fri)`;

    weeks.push({
      weekNumber,
      weekString,
      startDate: weekStart,
      endDate: weekEnd,
      workDays,
    });

    // Move to next Monday
    currentDate.setDate(currentDate.getDate() + 7);
    weekNumber++;
  }

  return weeks;
};
