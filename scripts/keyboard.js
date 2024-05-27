export const makeKeyboard = (parent) => {
  // keys
  const topRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const middleRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const bottomRow = ["Z", "X", "C", "V", "B", "N", "M"];

  const makeButton = (letter, parent) => {
    const button = document.createElement("button");
    button.innerText = letter;
    button.setAttribute("id", letter);
    button.setAttribute("class", "keyboardButton");
    parent.appendChild(button);
  };

  const topRowButtons = document.createElement("div");
  for (let i = 0; i < topRow.length; i++) {
    const letter = topRow[i];
    makeButton(letter, topRowButtons);
  }

  const middleRowButtons = document.createElement("div");
  for (let i = 0; i < middleRow.length; i++) {
    const letter = middleRow[i];
    makeButton(letter, middleRowButtons);
  }

  const bottomRowButtons = document.createElement("div");
  for (let i = 0; i < bottomRow.length; i++) {
    const letter = bottomRow[i];
    makeButton(letter, bottomRowButtons);
  }

  const backSpace = document.createElement("button");

  const done = document.createElement("button");

  backSpace.setAttribute("id", "backspace");
  backSpace.innerText = "<";
  done.setAttribute("id", "Done");
  done.innerText = "Done";

  middleRowButtons.appendChild(backSpace);
  bottomRowButtons.appendChild(done);
  parent.appendChild(topRowButtons);
  parent.appendChild(middleRowButtons);
  parent.appendChild(bottomRowButtons);
};
