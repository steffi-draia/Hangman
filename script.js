var words = ["shopping", "organisation", "game", "project", "mindfulness"];
var statusHangmanImg = ["youLost.jpg", "oneLifeLeft.jpg", "twoLivesLeft.jpg", "threeLivesLeft.jpg", "fourLivesLeft.jpg", "fiveLivesLeft.jpg", "sixLivesLeft.jpg"];
var livesLeft = 7;
var chosenWord = null;
var currentLettersGuessed = 0;


function chooseWordRandom(words) {
  return words[Math.floor(Math.random() * words.length)];
}

function generateElements() {
  chosenWord = chooseWordRandom(words);
  let div1 = document.getElementById('div1');
  for (let i = 0; i < chosenWord.length; ++i) {
    let inputBoxElement = document.createElement('input');
    inputBoxElement.setAttribute("size", 5);
    inputBoxElement.setAttribute("id", i);
    div1.appendChild(inputBoxElement);
  }
}

function updateLivesLeft(livesLeft) {
  document.getElementById('showLivesLeft').textContent = livesLeft;
  if (livesLeft == 0) {
    showStatus.innerHTML = "Sorry! You lost";
    document.getElementById("check").onclick = null;
  }
}

function changeImage(livesLeft) {
  let setImage = document.getElementById("showImage");
  setImage.src = statusHangmanImg[livesLeft];
}

function checkLetter() {
  let userInput = document.getElementById('letter').value;
  let x = false;
  for (let i = 0; i < chosenWord.length; ++i) {
    if (chosenWord[i] == userInput && document.getElementById(i).value == "") {
      document.getElementById(i).value = chosenWord[i];
      x = true;
      ++currentLettersGuessed;
    }
  }
  if (!x) {
    --livesLeft;
    updateLivesLeft(livesLeft);
    changeImage(livesLeft);
  } else {
    if (currentLettersGuessed == chosenWord.length) {
      showStatus.innerHTML = "Congrats! You guessed the word!";
      document.getElementById("check").onclick = null;
    }
  }
}

updateLivesLeft(livesLeft);
generateElements();
