const word = ["h","a", "n", "g", "m", "a", "n"];
var livesLeft = 7;
var currentLettersGuessed = 0;
generateElements();
updateLivesLeft(livesLeft);

function generateElements() {
  let div1 = document.getElementById('div1');
  for (let i = 0; i < word.length; ++i) {
    let inputBoxElement = document.createElement('input');
    inputBoxElement.setAttribute("size", 5);
    inputBoxElement.setAttribute("id", i);
    div1.appendChild(inputBoxElement);
  }
}

function updateLivesLeft(livesLeft) {
  document.getElementById('showLivesLeft').textContent = livesLeft;
}

function checkStatus() {
  let showStatus = document.getElementById("showStatus");
  if (currentLettersGuessed == word.length) {
    showStatus.innerHTML = "Congrats! You guessed the word!";
    document.getElementById("check").onclick = null;
  } else if (livesLeft == 0) {
    showStatus.innerHTML = "Sorry! You lost";
    document.getElementById("check").onclick = null;
  }
}

function changeImage(livesLeft) {
  let setImage = document.getElementById("showImage");
  if (livesLeft == 6) {
    setImage.src = "sixLivesLeft.jpg";
  } else if (livesLeft == 5) {
    setImage.src = "fiveLivesLeft.jpg";
  } else if (livesLeft == 4) {
    setImage.src = "fourLivesLeft.jpg";
  } else if (livesLeft == 3) {
    setImage.src = "threeLivesLeft.jpg";
  } else if (livesLeft == 2) {
    setImage.src = "twoLivesLeft.jpg";
  } else if (livesLeft == 1) {
    setImage.src = "oneLifeLeft.jpg";
  } else {
    setImage.src = "youLost.jpg";
  }
}

function checkLetter() {
  let userInput = document.getElementById('letter').value;
  let x = false;
  for (let i = 0; i < word.length; ++i) {
    if (word[i] == userInput && document.getElementById(i).value == "") {
      document.getElementById(i).value = word[i];
      x = true;
      ++currentLettersGuessed;
    }
  }
  if (!x) {
    --livesLeft;
    updateLivesLeft(livesLeft);
    changeImage(livesLeft);
  }
  checkStatus();
}
