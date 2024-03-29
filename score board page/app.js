// اطلاعات از لوکال استورج گرفته شه و توی تمپلت قرار بگیره

// ۴.اونی ک برنده شد یا بازنده باید ی کلس بهشون اضاف شه ک رنگ سبز یا قرمز بگیرن.

// ۵.اسکور هر پلیر حساب شه با کم کردن وین از لوز ولی منفی نشه.

// ۶.طبق بیشترین  به کمترین اسکور توی ردیف قرار بگیرن.

// ٧.هر کاربری ک وارد میشه باید چک شه ک قبلا توی ارایه پلیر ذخیره شده یا نه ک تغییرات به خودش اضافه شه و دوباره ثبت نشه.

// template for player & history section

function addToPlayers() {
  // get from local storage
  const gamesPlayersLS = fromLS();
  // get the games array
  const gamesLS = gamesPlayersLS[0];
  // get the players array
  const playersLS = gamesPlayersLS[1];

  // for each player a template is needed
  playersLS.forEach((player) => {
    // variables for object keys in players array
    const nameP = player.name;
    const win = player.win;
    const lose = player.lose;
    // the final score
    let score = player.win - player.lose;
    if (score < 0) {
      score = 0;
    }

  // only show the players with win or lose
  if (!(win === 0 & lose === 0) ) {
    document
    .querySelector("#playersSec")
    .insertAdjacentHTML(
      "beforeend",
      playerTemplate(nameP, win, lose, score)
    );
  } 
  });

  gamesLS.forEach((game) => {
    // variables for object keys in players array
    const nameP1 = game.player1;
    const nameP2 = game.player2;
    const date = game.gameDate;

    document
    .querySelector("#historySec")
    .insertAdjacentHTML(
      "beforeend",
      historyTemplate(nameP1, nameP2, date)
    );

    // winner = green , loser = red************* 
    document.querySelectorAll("#player1").forEach(player1 => {
      if (game.winner === game.player1 ) {
        player1.classList.add("winner");
      }else {
        player1.classList.add("loser");
      } 
    });

    document.querySelectorAll("#player2").forEach(player2 => {
      if (game.winner === game.player2 ) {
        player2.classList.add("winner");
      }else {
        player2.classList.add("loser");
      } 
    });

  });
}

function playerTemplate(nameP, win, lose, score) {
  return `<div>
    <span class="player">${nameP}</span>
    <span>Win: ${win}</span> <span>Lose: ${lose}</span>
    <span class="score">Score: ${score}</span>
</div>`;
}

function historyTemplate(nameP1, nameP2, date) {
  return `<div>
    <p>
    <span id="player1">${nameP1}</span>
     <span>vs</span>
     <span id="player2">${nameP2}</span>
     </p>
     <span class="date">${date}</span>
 </div>`;
}

addToPlayers()
