let body = document.querySelector("body")
let section = document.querySelector("section")
let container = document.querySelector(".container")
let hummy = document.querySelector(".hummy")
let hummyImage = document.querySelector('.hummyImage')
// let img1 = document.querySelector(".img1")
// let img2 = document.querySelector(".img2")
let bombImg = document.querySelector('.bombImg')

let input = document.querySelector('#gameSpeed')
let heart = document.querySelector('#heart')
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
            console.log(e.keyCode);

            x -= step;
            hummy.style.left = x + 'px';
            hummy.style.transform = 'rotate(90deg)';
        }
    } else if (e.keyCode == 38 || e.keyCode == 87) {
        //  برای حرکت بع سمت بالا
        // move up
        if (y > 0) {
            y -= step
            hummy.style.top = y + 'px'
            hummy.style.transform = 'rotate(0deg)';
        }
    } else if (e.keyCode == 39 || e.keyCode == 68) {
        // برای حرکت به سمت راست
        if (x + 100 < container.clientWidth - 100) {

            x += step
            hummy.style.left = x + 'px'
            hummy.style.transform = 'rotate(0deg)'
        }
    } else if (e.keyCode == 40 || e.keyCode == 83) {
        // برای حرکت به سمت پایین
        // move down
        if (y + 100 < container.clientHeight - 100) {

            y += step
            hummy.style.top = y + 'px'
            hummy.style.transform = 'rotate(90deg)'
        }
    }
})

// برای سرعت بازی
// game speed
body.addEventListener('keydown', () => {
// input is game speed 
    if (input.value == 1) {
        hummy.style.transitionDuration = '8s'
    } else if (input.value == 2) {
        hummy.style.transitionDuration = '6s'
    } else if (input.value == 3) {
        hummy.style.transitionDuration = '3s'
    } else if (input.value == 4) {
        hummy.style.transitionDuration = '2s'
    } else if (input.value == 5) {
        hummy.style.transitionDuration = '0s'
    }
})

// جون کارکتر در بازی 
// demage
hummy.addEventListener('click', demage)
// function for demage
function demage() {
    if (heart.innerHTML > 0) {
        heart.innerHTML -= 1
    }
    if (heart.innerHTML == 0) {
        // call end game function
        endGame()
    }
}


// timer of the game
const timerEl = document.querySelector('#timerEl')
// function of timer
function timer() {
    // create min and seconds timer
    let min, sec

    // start the timer
    min = 2
    sec = 59

    timerEl.textContent = `${min}:${sec}`
    // every 1 second activate this
    const timerInterval = setInterval(() => {
        sec -= 1
        if (sec == 0 && min == 0) {
            // call end game function
            endGame()
            clearInterval(timerInterval)
        } else {
            if (sec < 0) {
                sec = 59
                min -= 1
            }
            if (sec < 10) {
                sec = `0${sec}`
            }
        }
        timerEl.textContent = `${min}:${sec}`
    }, 1000)
}
// action timer functon
timer()
// end game
const report = document.querySelector('#report')
// end game function 
function endGame() {
    report.style.display = 'flex'
}
// bomb part-----------------

// اگر روی صفحه بازی کلیک کنید انفجاری رخ میده
// if click on the page
container.addEventListener('click', (e) => {
    // if (e.target.classList.contains('hummyImage')) {
    //     heart.value -= 1
    // }
     //    مشخص کردن مختصات
     let width = e.x
     let height = e.y
 console.log(width,height);
     bombImg.style.top = height -180 + 'px'
     bombImg.style.left = width - 180 + 'px'
     bombImg.style.display = "block"
    
    const bomb=setTimeout(() => {
        console.log("ok");
        bombImg.style.display = "none"
    },1000)
})
