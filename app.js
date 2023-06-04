
let body = document.querySelector("body")
let section = document.querySelector("section")
let container = document.querySelector("#container")
let hummy = document.querySelector("#hummy")
let bomb = document.querySelector("#bomb")
let img1 = document.querySelector(".img1")
let img2 = document.querySelector(".img2")
let moveBy = 10;

window.addEventListener('load', () => {

    hummy.style.position = 'absolute';
    hummy.style.left = 0;
    hummy.style.top = 0;

});


window.addEventListener('keydown', (e) => {


    switch (e.key) {
        case 'ArrowLeft':
            hummy.style.left = parseInt(hummy.style.left) - moveBy + "px";
            break;

        case 'ArrowRight':
            hummy.style.left = parseInt(hummy.style.left) + moveBy + "px";
            break;

        case 'ArrowUp':
            hummy.style.top = parseInt(hummy.style.top) - moveBy + "px";
            break;

        case 'ArrowDown':
            hummy.style.top = parseInt(hummy.style.top) + moveBy + "px";
            break;
    }

   

})

// hummy.addEventListener('click' ,bomb )

// function bomb(e) {
//     e.container.classList.add("bombShow")
// }

container.addEventListener("click", () => {

    bomb.classList.add("bombShow")
    bomb.style.animation = "bmb 2s 1"

})

container.addEventListener("click", (e) =>{
    console.log(e);
})
