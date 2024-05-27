import { dict } from "./dict.js";

// build word library
const words = Object.keys(dict);
export const fiveLetterWords = words
  .filter((word) => {
    return word.length === 5;
  })
  .map((word) => {
    return word.toUpperCase();
  });
export const sixLetterWords = words
  .filter((word) => {
    return word.length === 6;
  })
  .map((word) => {
    return word.toUpperCase();
  });
export const sevenLetterWords = words
  .filter((word) => {
    return word.length === 7;
  })
  .map((word) => {
    return word.toUpperCase();
  });

export const dictionaryChecker = (guess) => {
  let dictToCheck;
  if (guess.length === 5) {
    dictToCheck = fiveLetterWords;
  }
  if (guess.length === 6) {
    dictToCheck = sixLetterWords;
  }
  if (guess.length === 7) {
    dictToCheck = sevenLetterWords;
  }

  return dictToCheck.includes(guess);
};
