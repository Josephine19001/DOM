var randomNumber1 = Math.floor(Math.random() *6) +1;
var randomNumber = Math.floor(Math.random() *6) +1;
var player1Image = "images/dice"+randomNumber1+".png";
var player2Image ="images/dice"+randomNumber+".png";

document.querySelector('.image1').setAttribute('src', player1Image);
document.querySelector('.image2').setAttribute('src',player2Image);

if(player1Image > player2Image){
    document.querySelector('#title').innerHTML = "🚩Player One wins!🥳";
}else if(player2Image > player1Image){
    document.querySelector('#title').innerHTML = "🚩Player Two wins!🥳";
}else{
    document.querySelector('#title').innerHTML = "Roll Again😏"
}