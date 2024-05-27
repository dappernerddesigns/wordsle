const streak = JSON.parse(window.localStorage.getItem("wordsle"));
const listArea = document.getElementById("stats");

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
