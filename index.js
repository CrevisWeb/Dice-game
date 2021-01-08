
// document.querySelector("img").setAttribute("href","images/dice5.png");

var imgAr = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];

function getRandomImage(){
    var randomNumber1 = Math.floor( Math.random() * imgAr.length );
    var randomNumber2 = Math.floor( Math.random() * imgAr.length );

    document.getElementById("img1").src = imgAr[randomNumber1];
    document.getElementById("img2").src = imgAr[randomNumber2];

    if(randomNumber1 > randomNumber2){
      document.querySelector("h1").textContent = "Player 1 Wins!";
    }
    elseif(randomNumber1 < randomNumber2){
      document.querySelector("h1").textContent = "Player 2 Wins!";
    }
    else{
      document.querySelector("h1").textContent = "Draw!";
    }
}
