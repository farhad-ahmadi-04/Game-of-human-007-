// الگوریتم :
// ١.گرفتن اسم و شماره تماس هردو کاربر و ذخیره انها در دو ارایه گیم و پلیر در لوکال استورج.

// ٢.گرفتن اسم کاربران از ارایه گیم و قراردادن اسمشون در سایدی که انتخاب شده

// ٣.با تموم شدن جون یا تایم تعداد وین و لوز مشخص بشه و به ارایه پلیر اضاف شه .

// ۴.اونی ک برنده شد یا بازنده باید ی کلس بهشون اضاف شه ک رنگ سبز یا قرمز بگیرن.

// ۵.اسکور هر پلیر حساب شه با کم کردن وین از لوز ولی منفی نشه.

// ۶.طبق بیشترین  به کمترین اسکور توی ردیف قرار بگیرن.

// ٧.هر کاربری ک وارد میشه باید چک شه ک قبلا توی ارایه پلیر ذخیره شده یا نه ک تغییرات به خودش اضافه شه و دوباره ثبت نشه.

// template for player & history section

function platerTemplate(nameP, win, lose, score) {
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
