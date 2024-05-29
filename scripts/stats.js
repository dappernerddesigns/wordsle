const streak = JSON.parse(window.localStorage.getItem("wordsle"));
const listArea = document.getElementById("stats");

const today = new Date();
const checkVisit = (date) => {
  const todaysDate = date.toDateString().split(" ");
  const dayKey = `${todaysDate[1]} ${todaysDate[2]}`;

  if (streak === null || !streak[dayKey]) {
    window.location.replace("/");
  }
};
checkVisit(today);

for (const day in streak) {
  const stars = streak[day];
  const dateListItem = document.createElement("li");
  dateListItem.setAttribute("class", "stat-day");
  const dayText = document.createElement("p");
  dayText.setAttribute("class", "day-text");
  dayText.innerText = day;
  dateListItem.appendChild(dayText);
  const starContainer = document.createElement("div");
  starContainer.setAttribute("class", "star-container");
  for (let i = 0; i < stars; i++) {
    const star = document.createElement("img");
    star.src = "../assets/star.png";
    star.setAttribute("class", "starImg");
    starContainer.appendChild(star);
  }
  dateListItem.appendChild(starContainer);
  listArea.appendChild(dateListItem);
}
