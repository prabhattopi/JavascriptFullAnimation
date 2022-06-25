const inputs = document.querySelector(".inputs"),
  Restart = document.querySelector(".reset-btn"),
  hint = document.querySelector(".hint span"),
  Guess = document.querySelector(".guess-left span"),
  TypinInput = document.querySelector(".typing-input"),
  Incorrents = document.querySelector(".wrong-letter span");
let word,
  maxGuess,
  corrects = [],
  incorrects = [];

function randomWord() {
  let randomObj = wordlist[Math.floor(Math.random() * wordlist.length)];
  word = randomObj.word;
  corrects = [];
  incorrects = [];
  maxGuess = 8;
  hint.innerText = randomObj.hint;
  Guess.innerText = maxGuess;
  Incorrents.innerText = incorrects;

  let html = "";
  for (let i = 0; i < word.length; i++) {
    html += `<input type="text" disabled>`;
  }
  inputs.innerHTML = html;
}
randomWord();

function initGame(e) {
  let key = e.target.value;
  if (
    key.match(/^[A-Za-z]+$/) &&
    !incorrects.includes(key) &&
    !corrects.includes(key)
  ) {
    if (word.includes(key)) {
      for (let i = 0; i < word.length; i++) {
        if (word[i] == key) {
          inputs.querySelectorAll("input")[i].value = key;
          corrects.push(key);
        }
      }
    } else {
      incorrects.push(key);

      maxGuess--;
    }
    Guess.innerText = maxGuess;
    Incorrents.innerText = incorrects.join(", ").toLocaleUpperCase();
  }

  TypinInput.value = "";

  setTimeout(() => {
    if (corrects.length == word.length) {
      alert(`You won the Game-->${word.toLocaleUpperCase()}`);
      randomWord();
    } else if (maxGuess < 1) {
      alert("Game Over");
      for (let i = 0; i < word.length; i++) {
        inputs.querySelectorAll("input")[i].value = word[i];
      }
    }
  });
}

Restart.addEventListener("click", randomWord);
TypinInput.addEventListener("input", initGame);
inputs.addEventListener("click", () => TypinInput.focus());
document.addEventListener("keydown", () => TypinInput.focus());
