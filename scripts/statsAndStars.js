export const dayCalculator = (startDate, now) => {
  const diffInTime = now.getTime() - startDate.getTime();
  const daysDiff = Math.round(diffInTime / (1000 * 3600 * 24));

  return daysDiff;
};

export const addStarsToStreak = (currStreak, stars, date) => {
  const currStreakObj = JSON.parse(currStreak);

  const todaysDate = date.toDateString().split(" ");
  const dayKey = `${todaysDate[1]} ${todaysDate[2]}`;
  currStreakObj[dayKey] = stars;

  const lastSevenDays = getLastSevenDays();
  const sevenDayStreak = lastSevenDays.map((day) => {
    let stars = 0;
    if (day in currStreakObj) {
      stars = currStreakObj[day];
    }
    return [day, stars];
  });
  const newStreak = Object.fromEntries(sevenDayStreak);

  return newStreak;
};

const getLastSevenDays = () => {
  const days = [];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  for (let i = 0; i < 7; i++) {
    const date = new Date();
    date.setDate(date.getDate() - i);

    const month = months[date.getMonth()];
    const day = date.getDate();

    days.push(`${month} ${day}`);
  }

  return days;
};
