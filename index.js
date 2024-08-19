var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImage1Source = "images/dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImage1Source);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImage2Source = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImage2Source);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent = "Player1 Wins!";
} else if(randomNumber1==randomNumber2){
    document.querySelector("h1").textContent = "Draw";
} else {
    document.querySelector("h1").textContent = "Player2 Wins!"
}

    
