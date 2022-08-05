

var  randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";//dice1.png-dice6.png
var randomImageSource = "images/" + randomDiceImage;//images/dice1.png-dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

//for dice 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

//for displaying winner.
winner = document.querySelector("h1")
if (randomNumber1 > randomNumber2){
  winner.textContent = '🚩 Player 1 wins';
}

else if (randomNumber2 > randomNumber1) {
  winner.textContent = 'Player 2 wins 🚩';
}

else {
  winner.textContent = 'Draw!';
}
