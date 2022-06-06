//Play 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImage1 = "images/dice" +randomNumber1+".png";
document.getElementsByClassName("img1").item(0).setAttribute("src", randomImage1);

//Play 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "images/dice" +randomNumber2+".png";
document.getElementsByClassName("img2").item(0).setAttribute("src", randomImage2);
//If Play 1 wins
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML ="Play 1 Wins!!!";
} 
//If Play 2 wins
else  if (randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML ="Play 2 Wins!!!";
}
//If they are equals
else{
  document.querySelector("h1").innerHTML ="Draw";

}
