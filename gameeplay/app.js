let body = document.querySelector("body");
let section = document.querySelector("section");
let container = document.querySelector(".container");
let hummy = document.querySelector(".hummy");
let hummyImage = document.querySelector(".hummyImage");
// let img1 = document.querySelector(".img1")
// let img2 = document.querySelector(".img2")
let bombImg = document.querySelector(".bombImg");

// ......................................................
let input = document.getElementById("gameSpeed");
let heart = document.querySelector("#heart");
let x = 0;
let y = 0;
// step of charechter
let step = 70;
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

body.addEventListener("keydown", function (e) {
  if (e.keyCode == 37 || e.keyCode == 65) {
    // برای حرکت به سمت چپ
    // move left
    if (x > 0) {
      x -= step;
      hummy.style.left = x + "px";
    }
  } else if (e.keyCode == 38 || e.keyCode == 87) {
    //  برای حرکت بع سمت بالا
    // move up
    if (y > 0) {
      y -= step;
      hummy.style.top = y + "px";
    }
  } else if (e.keyCode == 39 || e.keyCode == 68) {
    // برای حرکت به سمت راست
    if (x + 100 < container.clientWidth - 100) {
      x += step;
      hummy.style.left = x + "px";
    }
  } else if (e.keyCode == 40 || e.keyCode == 83) {
    // برای حرکت به سمت پایین
    // move down
    if (y + 100 < container.clientHeight - 100) {
      y += step;
      hummy.style.top = y + "px";
    }
  }
});

// برای سرعت بازی
// game speed
body.addEventListener("keydown", () => {
  // input is game speed
  if (input.value == 1) {
    hummy.style.transitionDuration = "8s";
  } else if (input.value == 2) {
    hummy.style.transitionDuration = "6s";
  } else if (input.value == 3) {
    hummy.style.transitionDuration = "3s";
  } else if (input.value == 4) {
    hummy.style.transitionDuration = "2s";
  } else if (input.value == 5) {
    hummy.style.transitionDuration = "0s";
  }
});

// جون کارکتر در بازی
// demage
hummy.addEventListener("click", demage);
// function for demage
function demage() {
  if (heart.innerHTML > 0) {
    heart.innerHTML -= 1;
  }
  if (heart.innerHTML == 0) {
    // call end game function
    endGame();
   // showing loser name
   loserP1();
   // add a point to player1 lose & player2 win
   player2win();
  }
}

// timer of the game
const timerEl = document.querySelector("#timerEl");
// function of timer
function timer() {
  // create min and seconds timer
  let min, sec;

  // start the timer
  min = 2;
  sec = 59;

  timerEl.textContent = `${min}:${sec}`;
  // every 1 second activate this
  const timerInterval = setInterval(() => {
    sec -= 1;
    if (sec == 0 && min == 0) {
      // call end game function
      endGame();
    // showing loser name
    loserP2();
    // add a point to player1 win & player2 lose
    player1win();
      clearInterval(timerInterval);
    } else {
      if (sec < 0) {
        sec = 59;
        min -= 1;
      }
      if (sec < 10) {
        sec = `0${sec}`;
      }
    }
    timerEl.textContent = `${min}:${sec}`;
  }, 1000);
}
// action timer functon
timer();
// end game
const report = document.querySelector("#report");
const homeBtn = document.querySelector('.homeBtn')
// end game function
function endGame(e) {
  report.style.display = "flex";
}

// ---------------click io report page-------------- 
// for back to home
homeBtn.addEventListener("click", homePage);
// function for back to home
function homePage(event) {
  if (event.target.classList.contains("homeBtn")) {
    location.href = "../index.html";
  }
}

const playAgainBtn = document.querySelector('.playAgainBtn')
// for back to home
playAgainBtn.addEventListener("click", playAgainTheGame);
// function for back to home
function playAgainTheGame(event) {
  if (event.target.classList.contains("playAgainBtn")) {
    location.href = "../alireza-chooseSide/choosSide.html";
  }
}
// ---------------bomb part-----------------


//  fail in this part:)))))))

// // اگر روی صفحه بازی کلیک کنید انفجاری رخ میده
// // if click on the page
// container.addEventListener("click", (e) => {
//   // if (e.target.classList.contains('hummyImage')) {
//   //     heart.value -= 1
//   // }
//   //    مشخص کردن مختصات
//   let width = e.x;
//   let height = e.y;
//   bombImg.getBoundingClientRect();
//  const x = bombImg.x;
//  const y = bombImg.y;
//  console.log(x,y);
//   bombImg.style.top = height - 180 + "px";
//   bombImg.style.left = width - 180 + "px";
//   bombImg.style.display = "block";

//   const bomb = setTimeout(() => {
//     bombImg.style.display = "none";
//   }, 1000);
//   damage(width, height);
// });
// function damage(x,y) {
//     setTimeout(() => {
//       if (x==hummy.clientHeight && y==hummy.clientWidth) {
//         console.log(x);
//         heart.innerHTML-=1
//     }
//     },1000)

// }

// Sara........................................................

// ٢.گرفتن اسم کاربران و قراردادن اسمشون در سایدی که انتخاب شده

// ٣.با تموم شدن جون یا تایم اسم برنده یا بازنده مشخص شه

// 4.به وین یا لوز هر پلیر توی ارایه اضافه شه

// get user names from local storage

function getNames() {
  // get the games array
  const gamesPlayersLS = fromLS();
  const gamesLS = gamesPlayersLS[0];

  // get player1 & player2 names from the last object in the array

  const currentPlayer1 = gamesLS[gamesLS.length - 1].player1;
  const currentPlayer2 = gamesLS[gamesLS.length - 1].player2;

  return [currentPlayer1, currentPlayer2];
}
// ......................................................

function addNames() {
  const currentPlayers = getNames();
  const currentPlayer1 = currentPlayers[0];
  const currentPlayer2 = currentPlayers[1];

  // add them in the html

  const firstPlayer = document.querySelector("#player1");
  const secondPlayer = document.querySelector("#player2");

  firstPlayer.innerHTML = currentPlayer1;
  secondPlayer.innerHTML = currentPlayer2;
}

addNames();
// ......................................................

// player1 loser > heart = 0
function loserP1() {
  const winner = document.querySelector("#winner");
  const loser = document.querySelector("#loser");
  getNames();

  const players = getNames();
  const player1 = players[0];
  const player2 = players[1];

  winner.innerHTML = player2;
  loser.innerHTML = player1;

}

// player2 loser > time = 0
function loserP2() {
  const winner = document.querySelector("#winner");
  const loser = document.querySelector("#loser");
  getNames();

  const players = getNames();
  const player1 = players[0];
  const player2 = players[1];

  winner.innerHTML = player1;
  loser.innerHTML = player2;
}

// ......................................................

// find the current players in the players array

function player1win() {
  // get the games array
  const gamesPlayersLS = fromLS();
  const gamesLS = gamesPlayersLS[0];
  // get the players array
  const playersLS = gamesPlayersLS[1];

  const currentPlayer1Num = gamesLS[gamesLS.length - 1].player1num;
  const currentPlayer2Num = gamesLS[gamesLS.length - 1].player2num;

  // find the match in both arrays

  const foundP1 = playersLS.find((player1) => {
    if (player1.number === currentPlayer1Num) {
      return player1;
    }
  });

  if (foundP1) {
    foundP1.win += 1;
  }

  const foundP2 = playersLS.find((player2) => {
    if (player2.number === currentPlayer2Num) {
      return player2;
    }
  });

  if (foundP2) {
    foundP2.lose += 1;
  }
}

function player2win() {
  // get the games array
  const gamesPlayersLS = fromLS();
  const gamesLS = gamesPlayersLS[0];
  // get the players array
  const playersLS = gamesPlayersLS[1];

  const currentPlayer1Num = gamesLS[gamesLS.length - 1].player1num;
  const currentPlayer2Num = gamesLS[gamesLS.length - 1].player2num;

  // find the match in both arrays

  const foundP1 = playersLS.find((player1) => {
    if (player1.number === currentPlayer1Num) {
      return player1;
    }
  });

  if (foundP1) {
    foundP1.lose += 1;
  }

  const foundP2 = playersLS.find((player2) => {
    if (player2.number === currentPlayer2Num) {
      return player2;
    }
  });

  if (foundP2) {
    foundP2.win += 1;
  }

  // store points in local storage
  toLS(gamesLS, playersLS);

}