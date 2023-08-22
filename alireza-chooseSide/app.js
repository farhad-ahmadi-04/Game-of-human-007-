// 1.get input value and save it in local storage............

  // when playnow button is clicked
let button = document.querySelector("button");
button.addEventListener("click", (e) => {
    // stop refresh & get values
    e.preventDefault();

// input values > player 1 & 2 > name & number
let nameP1V = document.querySelector("#nameP1V").value;
let numberP1V = document.querySelector("#numberP1V").value;

let nameP2V = document.querySelector("#nameP2V").value;
let numberP2V = document.querySelector("#numberP2V").value;

// 
  saveUserData(nameP1V, numberP1V, nameP2V, numberP2V);

});


function saveUserData(nameP1V, numberP1V, nameP2V, numberP2V) {

    // later on registrations
    let gamesLS = JSON.parse(localStorage.getItem("games"));
    let playersLS = JSON.parse(localStorage.getItem("players"));

    // for the first registration
    if (gamesLS == null || playersLS == null) {
// make an array in local storage
      localStorage.setItem("games", "[]");
    //   take that array out of local storage
      gamesLS = JSON.parse(localStorage.getItem("games"));

      localStorage.setItem("players", "[]");
      playersLS = JSON.parse(localStorage.getItem("players"));
    }

// push them in the array
  gamesLS.push({ player1: nameP1V, player2: nameP2V });
  playersLS.push(
    { name: nameP1V, number: numberP1V, win:0, lose:0 },
    { name: nameP2V, number: numberP2V, win:0, lose:0 }
  );

//   then put the array back in local storage
  localStorage.setItem("games", JSON.stringify(gamesLS));
  localStorage.setItem("players", JSON.stringify(playersLS));

}





// ................................................................
