//storing random value in different variables for the two players
var randomNumber1 = Math.floor(Math.random() *6) +1;// 1-6
var randomNumber2 = Math.floor(Math.random() *6) +1;

//using concatenation to randomize the dice selection
var player1Image = "images/dice"+randomNumber1+".png";//images/dice1.png - images/dice6.png
var player2Image ="images/dice"+randomNumber2+".png";

//selecting image through the class in html and giving it a new attribute
document.querySelector('.image1').setAttribute('src', player1Image);
document.querySelector('.image2').setAttribute('src',player2Image);
//changing H1 when either of the player wins or when both players have same values.
if(player1Image > player2Image){
    document.querySelector('#title').innerHTML = "🚩Player One wins!🥳";
}else if(player2Image > player1Image){
    document.querySelector('#title').innerHTML = "🚩Player Two wins!🥳";
}else{
    document.querySelector('#title').innerHTML = "Roll Again😏"
}