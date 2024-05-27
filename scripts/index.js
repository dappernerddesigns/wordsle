import {
  fiveLetterWords,
  sixLetterWords,
  sevenLetterWords,
  dictionaryChecker,
} from "./dictionary.js";
import { makeGuessesInputs } from "./guessInputs.js";
import { makeKeyboard } from "./keyboard.js";
import { addStarsToStreak, dayCalculator } from "./statsAndStars.js";

// fetch current stats from local storage, if not existing default to empty json object
const currStreak = window.localStorage.getItem("wordsle") || JSON.stringify({});
let newStreak;

// set level
const levelPages = ["/", "/stage-two.html", "/stage-three.html"];
const level = levelPages.indexOf(document.location.pathname);

// set dates
const startDate = new Date(2024, 4, 27);
const today = new Date();
const dayCount = dayCalculator(startDate, today);

// if someone has been today, don't reload the page.
const checkVisit = (date) => {
  const streak = JSON.parse(currStreak);
  const todaysDate = date.toDateString().split(" ");
  const dayKey = `${todaysDate[1]} ${todaysDate[2]}`;
  if (streak[dayKey]) {
    window.location.replace("/stats.html");
  }
};
checkVisit(today);

// set words
let word = fiveLetterWords[dayCount].toUpperCase();
if (level === 1) {
  word = sixLetterWords[dayCount].toUpperCase();
}
if (level === 2) {
  word = sevenLetterWords[dayCount].toUpperCase();
}

let turn = 0;
let guess = "";
let letterCount = 0;
let stars = 0;

const gameArea = document.getElementById("game-area");

// Make keyboard
const keyboard = document.getElementById("keyboard");
makeKeyboard(keyboard);

// Make guesses inputs
makeGuessesInputs(word);

// get all buttons
const buttons = document.querySelectorAll("button.keyboardButton");
const backSpace = document.getElementById("backspace");
const submit = document.getElementById("Done");
const guessRows = document.querySelectorAll("div.guess-row");

let currTurn = guessRows[turn].children;

// concatenate letters to guess string
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (letterCount < word.length) {
      guess += button.id;
      currTurn[letterCount].innerText = button.id;
      letterCount++;
    }
  });
});

// remove letters from dom, guess, and remove shake class
backSpace.addEventListener("click", () => {
  if (letterCount > 0) {
    const nextCell = letterCount - 1;

    currTurn[nextCell].innerText = "";
    currTurn[nextCell].classList.remove("shake");

    guess = guess.slice(0, guess.length - 1);
    letterCount--;
  }
});

submit.addEventListener("click", () => {
  // if word does not exist in dictionary, give it a wobble
  if (!dictionaryChecker(guess)) {
    for (let i = 0; i < word.length; i++) {
      currTurn[i].classList.add("shake");
    }
  }
  // if word exists in dictionary, loop and assign correct and incorrect letters
  if (letterCount === word.length && dictionaryChecker(guess)) {
    for (let i = 0; i < word.length; i++) {
      const correctLetter = word[i];
      const guessedLetter = currTurn[i].innerText;

      if (guessedLetter === correctLetter) {
        currTurn[i].classList.add("correct-letter-correct-space");
      } else if (
        word.includes(guessedLetter) &&
        guessedLetter !== correctLetter
      ) {
        currTurn[i].classList.add("correct-letter-incorrect-space");
      } else {
        const disableButton = document.getElementById(guess[i]);
        disableButton.classList.add("disabled");
      }
    }

    const linkToStats = document.createElement("a");
    linkToStats.setAttribute("href", "stats.html");
    linkToStats.innerText = "Show me my stats";
    linkToStats.setAttribute("class", "stats-link");

    // if guessed correctly
    if (guess === word) {
      const congratsMsgP = document.createElement("h3");
      congratsMsgP.innerText = "Congratulations!";
      const nextPuzzle = document.createElement("a");
      nextPuzzle.innerText = "click here";
      nextPuzzle.setAttribute("class", "next-link");

      if (level === 0) {
        congratsMsgP.innerText += " Ready for a harder one?";
        nextPuzzle.setAttribute("href", "stage-two.html");
        gameArea.appendChild(congratsMsgP);
        gameArea.appendChild(nextPuzzle);
      }
      if (level === 1) {
        congratsMsgP.innerText += " Ready for a harder one?";
        nextPuzzle.setAttribute("href", "stage-three.html");
        gameArea.appendChild(congratsMsgP);
        gameArea.appendChild(nextPuzzle);
      }
      if (level === 2) {
        stars = 3;
        newStreak = addStarsToStreak(currStreak, stars, today);
        gameArea.appendChild(congratsMsgP);
        window.localStorage.setItem("wordsle", JSON.stringify(newStreak));

        gameArea.appendChild(linkToStats);
      }
    } else {
      // move onto next row if there is another guess
      if (turn < 4) {
        letterCount = 0;
        guess = "";
        turn++;
        currTurn = guessRows[turn].children;
      } else {
        const todaysWord = document.createElement("h3");
        todaysWord.innerText = `Today's word was ${word}`;
        const commiserationsMsgP = document.createElement("h3");
        commiserationsMsgP.innerText =
          "Oh no! You have no more guesses!\n You'll have to try again tomorrow";
        gameArea.appendChild(todaysWord);
        gameArea.appendChild(commiserationsMsgP);
        gameArea.appendChild(linkToStats);
        stars = level;
        newStreak = addStarsToStreak(currStreak, stars, today);
        window.localStorage.setItem("wordsle", JSON.stringify(newStreak));
      }
    }
  }
});
