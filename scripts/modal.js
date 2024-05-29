export const createModalSuccess = (parent, level) => {
  const modal = document.createElement("div");
  modal.setAttribute("id", "popup");
  modal.classList.add("closed");

  const congratsMsgP = document.createElement("h3");
  congratsMsgP.innerText = "Congratulations!";

  const nextPuzzle = document.createElement("a");
  nextPuzzle.innerText = "click here";
  nextPuzzle.setAttribute("class", "next-link");
  if (level === 0) {
    congratsMsgP.innerText += " Ready for a harder one?";
    modal.appendChild(congratsMsgP);
    nextPuzzle.setAttribute("href", "/stage-two.html");
  }
  if (level === 1) {
    congratsMsgP.innerText += " Ready for a harder one?";
    modal.appendChild(congratsMsgP);
    nextPuzzle.setAttribute("href", "/stage-three.html");
  }
  if (level === 2) {
    nextPuzzle.innerText = "My Stats";
    nextPuzzle.setAttribute("href", "./stats.html");
  }
  modal.appendChild(congratsMsgP);
  modal.appendChild(nextPuzzle);
  parent.appendChild(modal);
  console.dir(modal);
};

export const createModalFail = (parent, word) => {
  const modal = document.createElement("div");
  modal.setAttribute("id", "popup");
  modal.classList.add("closed");

  const todaysWord = document.createElement("h3");
  todaysWord.innerText = `Today's word was ${word}`;
  const commiserationsMsgP = document.createElement("h3");
  commiserationsMsgP.innerText =
    "Oh no! You have no more guesses!\n You'll have to try again tomorrow";

  const statsLink = document.createElement("a");
  statsLink.innerText = "My Stats";
  statsLink.setAttribute("class", "stats-link");
  statsLink.setAttribute("href", "./stats.html");
  modal.appendChild(todaysWord);
  modal.appendChild(commiserationsMsgP);
  modal.appendChild(statsLink);
  parent.appendChild(modal);
};
