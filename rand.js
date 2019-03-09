var input1 = prompt ("Input the first number");
var input2 = prompt ("input the second number")
alert ("you are about generating random number between the two numbers");
var buttomNum = parseInt(input1);
var topNum = parseInt(input2);
// document.write("Below is the random number between "+ topNum +" and " + buttomNum);
var random = Math.floor(Math.random() *topNum-buttomNum) +topNum;
document.write(random + " is the random number from" +topNum +" to" +buttomNum);