var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImage= "dice" + randomNumber1+".png";
var randomImageSource= "../images/"+randomImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource)

var randomImage1= "dice" + randomNumber2+".png";
var randomImageSource1= "../images/"+randomImage1;
var image1=document.querySelectorAll("img")[1];
image1.setAttribute("src", randomImageSource1)

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="	&#128681 Player 1 wins!!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="	&#128681 Player 2 wins!!";
}
else
{
    document.querySelector("h1").innerHTML="	&#128681 TIED!";
}