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

  // push them in the array
  addInLS(nameP1V, numberP1V, nameP2V, numberP2V);
});

// ....................................................

function fromLS() {
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
  // more than one value is needed so we put them in an array
  return [gamesLS, playersLS];
}

function addInLS(nameP1V, numberP1V, nameP2V, numberP2V) {
  // take that array out of local storage or build one if there is not any
  let gamesPlayersLS = fromLS();
  let gamesLS = gamesPlayersLS[0];
  let playersLS = gamesPlayersLS[1];

  // push them in the array
  // for local storage
  if (numberP1V !== numberP2V) {
    gamesLS.push({ player1: nameP1V, player1num: numberP1V, player2: nameP2V, player2num: numberP2V});
  }

  // we need to build them for the first time
  // then we have sth to loop over
  if (playersLS.length === 0) {
    playersLS.push({ name: nameP1V, number: numberP1V, win: 0, lose: 0 });
    // player 1 & 2 numbers shouldnt be equal for the first time
    if (numberP1V !== numberP2V) {
      playersLS.push({ name: nameP2V, number: numberP2V, win: 0, lose: 0 });
    }
  }
  // only push the new user
  let isInArray = false;
  playersLS.forEach((player) => {
    if (numberP1V === player.number) {
      isInArray = true;
    }
    if (numberP2V === player.number) {
      isInArray = true;
    }
    // player 1 & 2 numbers shouldnt be equal
    if (numberP1V === numberP2V) {
      isInArray = true;
    }
  });

  // if isInArray = false then push them in the array
  if (!isInArray) {
    playersLS.push({ name: nameP1V, number: numberP1V, win: 0, lose: 0 });

    playersLS.push({ name: nameP2V, number: numberP2V, win: 0, lose: 0 });
  }

  toLS(gamesLS, playersLS);
}

// ....................................................

function toLS(gamesLS, playersLS) {
  //   then put the array back in local storage
  localStorage.setItem("games", JSON.stringify(gamesLS));
  localStorage.setItem("players", JSON.stringify(playersLS));
  // add location for btn
  // location.href = "../index.html";
}

// ................................................................
let form = document.querySelector("#form");
let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");
let input3 = document.querySelector(".input3");
let input4 = document.querySelector(".input4");
button.addEventListener("click", (e) => {
  let input1Value = input1.value.trim();
  let input2Value = input2.value.trim();
  let input3Value = input3.value.trim();
  let input4Value = input4.value.trim();
  e.preventDefault();
  if (input1Value == "") {
    input1.parentElement.style = "border : 1px solid red";
  } else {
    input1.parentElement.style = "border : 1px solid #00dfc4";
  }

  if (input2Value == "") {
    input2.parentElement.style = "border : 1px solid red";
  } else {
    input2.parentElement.style = "border : 1px solid #00dfc4";
  }

  if (input3Value == "") {
    input3.parentElement.style = "border : 1px solid red";
  } else {
    input3.parentElement.style = "border : 1px solid #00dfc4";
  }

  if (input4Value == "") {
    input4.parentElement.style = "border : 1px solid red";
  } else {
    input4.parentElement.style = "border : 1px solid #00dfc4";
  }
  if (input1Value && input2Value && input3Value && input4Value != "") {
    location.href = "../index.html";
  }
  if (input1Value && input2Value && input3Value && input4Value == "")
    alert("please fill the field");
});
