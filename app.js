let body = document.querySelector("body")
let section = document.querySelector("section")
let container = document.querySelector("#container")
let hummy = document.querySelector("#hummy")
let bomb = document.querySelector("#bomb")
// let img1 = document.querySelector(".img1")
// let img2 = document.querySelector(".img2")
let bombImg = document.querySelector('.bombImg')

let input = document.querySelector('#gameSpeed')
let heart = document.querySelector('#heart')
let x = 0;
let y = 0;
let step = 50;
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;






body.addEventListener("keydown", function (e) {
    if (e.keyCode == 37 || e.keyCode == 65) {
        console.log(e);
        // برای حرکت به سمت چپ
        // move left
        if (x > 0) {
            console.log(x);
            x -= step;
            hummy.style.left = x + 'px';
            hummy.style.transform = 'rotate(90deg)';
        }
    } else if (e.keyCode == 38 || e.keyCode == 87) {
        //  برای حرکت بع سمت بالا
        // move up
        if (y > 0) {
            console.log(y);
            y -= step
            hummy.style.top = y + 'px'
            hummy.style.transform = 'rotate(0deg)';
        }
    } else if (e.keyCode == 39 || e.keyCode == 68) {
        // برای حرکت به سمت راست
        if (x + 100 < container.clientWidth - 100) {
            console.log(x);
            x += step
            hummy.style.left = x + 'px'
            hummy.style.transform = 'rotate(0deg)'
        }
    } else if (e.keyCode == 40 || e.keyCode == 83) {
        // برای حرکت به سمت پایین
        // move down
        if (y + 100 < container.clientHeight - 100) {
            console.log(y);
            y += step
            hummy.style.top = y + 'px'
            hummy.style.transform = 'rotate(90deg)'
        }
    }
})

// برای سرعت بازی
// game speed
body.addEventListener('keydown', () => {

    if (input.value == 1) {
        hummy.style.transitionDuration = '10s'
    } else if (input.value == 2) {
        hummy.style.transitionDuration = '7s'
    } else if (input.value == 3) {
        hummy.style.transitionDuration = '4s'
    } else if (input.value == 4) {
        hummy.style.transitionDuration = '2s'
    } else if (input.value == 5) {
        hummy.style.transitionDuration = '0s'
    }
})

// جون کارکتر در بازی 
// damage
hummy.addEventListener('click', () => {
    if (heart.innerHTML > 0) {
        heart.innerHTML -= 1
        
    }
    if (heart.innerHTML == 0) {
        hummy.innerHTML = `<img src="img/head-sad-face.png"alt="">`
        container.innerHTML += `<div id="gameOver">
        <span>Khateri Lost😢</span>
        </div>`
        let gameOver= document.querySelector('#gameOver');
       gameOver.style.transitionDuration = '5s'
    }

})


// اگر روی صفحه بازی کلیک کنید انفجاری رخ میده
container.addEventListener('click', (e) => {
    //    مشخص کردن مختصات
    let width = e.x
    let height = e.y
console.log(width,height);
    bombImg.style.top = height -80 + 'px'
    bombImg.style.left = width - 80 + 'px'
    bombImg.style.display = "block"
})