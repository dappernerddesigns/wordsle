export const makeGuessesInputs = (word) => {
  const guessesArea = document.getElementById("guesses");

  for (let i = 0; i < 5; i++) {
    const guessRow = document.createElement("div");
    guessRow.setAttribute("class", "guess-row");
    guessRow.setAttribute("id", `guess-${i}`);
    for (let j = 0; j < word.length; j++) {
      const id = `${i}${j}`;
      const box = document.createElement("div");
      box.setAttribute("id", id);
      box.setAttribute("class", "guess-input");
      guessRow.appendChild(box);
    }
    guessesArea.appendChild(guessRow);
  }
};
