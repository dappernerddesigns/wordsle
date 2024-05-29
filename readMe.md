# Wordsle

## A silly word guessing game that progressively gets harder

Earn up to three stars a day guessing a 5, 6 then 7 letter word.

## How to play

When you guess a word, if any letters are in the correct space the cell will turn green. If the letter is in the wrong place but does exist the cell will turn purple. If the whole word shakes, your word is not present in the current dictionary.

_nb The stored dictionary is relatively small, your word may be perfectly acceptable and the game may still reject it, I'm working on increasing the dictionary_

This game uses local storage to **only** store your stars earned for the last seven days. There are no cookies or any kind of tracking in this game. If you wish to clear your stats, clear your browser cache and the stored data will be removed.

## Known issues

_On a successful guess, some cells are not changing colour, under investigation_

## Updates and 🐛 fixes

- 29/05 If you land on the stats page and haven't played today, you're sent back to the first page without needing to navigate yourself.
- 29/05 A successful guess opens a pop up rather than generating text under the keyboard that was not easily noticed on mobile.
