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
    if (score < 0 ) {
      score = 0;
    }

    playerTemplate(nameP, win, lose, score);
  });

  gamesLS.forEach((game) => {
    // variables for object keys in players array
    const nameP1 = game.player1;
    const nameP2 = game.player2;
    const date = "date";

    historyTemplate(nameP1, nameP2, date);
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
    <span class="winner">${nameP1}</span>
     <span>vs</span>
     <span class="loser">${nameP2}</span>
     </p>
     <span class="date">${date}</span>
 </div>`;
}



document.querySelector("#playersSec").insertAdjacentHTML(
  "afterbegin", addToPlayers());


  