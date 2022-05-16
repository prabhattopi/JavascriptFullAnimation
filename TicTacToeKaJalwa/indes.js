const selectBox = document.querySelector(".select-box"),
  selectxBtn = selectBox.querySelector(".playerX"),
  selectoBtn = selectBox.querySelector(".playerO"),
  playBoard = document.querySelector(".play-board"),
  allBox = document.querySelectorAll("section span"),
  players = document.querySelector(".players"),
  resultBox = document.querySelector(".result-box"),
  wonText = resultBox.querySelector(".won-txt"),
  Repaly = resultBox.querySelector("button");
window.onload = () => {
  for (let i = 0; i < allBox.length; i++) {
    allBox[i].setAttribute("onclick", "clickedBox(this)"); //Adding onclick event on each and every boxes
  }

  selectxBtn.onclick = function () {
    selectBox.classList.add("hide");
    playBoard.classList.add("show");
   
  };
  selectoBtn.onclick = function() {
    selectBox.classList.add("hide");
    playBoard.classList.add("show");
    players.setAttribute("class", "players active player");
  };
};

let playerXIcon = "fas fa-times";
let playerOIcon = "far fa-circle";
let playerSign = "X";
let runbot = true;
function clickedBox(element) {
  // console.log(element)
  if (players.classList.contains("player")) {
    element.innerHTML = `<i class="${playerOIcon}"></i>`;
    players.classList.add("active");
    playerSign = "O";
    element.setAttribute("id", playerSign);
  } else {
    element.innerHTML = `<i class="${playerXIcon}"></i>`;
    players.classList.add("active");
    element.setAttribute("id", playerSign);
  }
  selectWinner();
  playBoard.style.pointerEvents = "none";
  element.style.pointerEvents = "none";
  let randomDelayTime = (Math.random() * 1000 + 200).toFixed();
  setTimeout(() => {
    bot(runbot);
  }, randomDelayTime);
}
function bot(runbot) {
  if (runbot) {
    playerSign = "O";
    let array = [];
    for (let index = 0; index < allBox.length; index++) {
      if (allBox[index].childElementCount == 0) {
        array.push(index);
        // console.log(index+" "+"has no chidren")
      }
    }
    let randomBox = array[Math.floor(Math.random() * array.length)];
    if (array.length > 0) {
      if (players.classList.contains("player")) {
        allBox[randomBox].innerHTML = `<i class="${playerXIcon}"></i>`;
        players.classList.remove("active");
        playerSign = "X";
        allBox[randomBox].setAttribute("id", playerSign);
      } else {
        allBox[randomBox].innerHTML = `<i class="${playerOIcon}"></i>`;
        players.classList.remove("active");
        allBox[randomBox].setAttribute("id", playerSign);
      }
      selectWinner();
    }

    allBox[randomBox].style.pointerEvents = "none";
    playBoard.style.pointerEvents = "auto";
    playerSign = "X";
  
  }
 
}
function getClass(idname) {
  return document.querySelector(".box" + idname).id;
}

function checkThreeClasses(val1, val2, val3, sign) {
  if (
    getClass(val1) == sign &&
    getClass(val2) == sign &&
    getClass(val3) == sign
  ) {
    return true;
  }
}
function selectWinner() {
  if (
    checkThreeClasses(1, 2, 3, playerSign) ||
    checkThreeClasses(4, 5, 6, playerSign) ||
    checkThreeClasses(7, 8, 9, playerSign) ||
    checkThreeClasses(1, 5, 9,playerSign)  ||
    checkThreeClasses(3, 5, 7, playerSign) ||
    checkThreeClasses(3, 6, 9, playerSign) ||
    checkThreeClasses(2, 5, 8, playerSign) ||
    checkThreeClasses(1, 4, 7, playerSign) == true
  ) {
    //   console.log(playerSign)
    runbot = false;

    bot(runbot);

    setTimeout(() => {
      playBoard.classList.remove("show");
      resultBox.classList.add("show");
    }, 700);

    wonText.innerHTML = `Player<p>${playerSign}</p>Won the game`;
  } 
  else {
    if (
      getClass(1) != "" &&
      getClass(2) != "" &&
      getClass(3) != "" &&
      getClass(4) != "" &&
      getClass(5) != "" &&
      getClass(6) != "" &&
      getClass(7) != "" &&
      getClass(8) != "" &&
      getClass(9) != ""
    ){
      runbot = false;

    bot(runbot);

    setTimeout(() => {
      playBoard.classList.remove("show");
      resultBox.classList.add("show");
    }, 700);

    wonText.innerText = "Match Draw!";
}
  }
}
Repaly.onclick=()=>{
    window.location.reload();
}