var correctguess = false;
var randomNumber = Math.floor(Math.random()*6) +1;
var guess = prompt('I am thinking of a number between 1 to 6. what is it?');
if (parseInt(guess)===randomNumber) {
    correctguess = true;
    document.write('<p> Alass!! you guess write</p>')
} else if(parseInt(guess) < randomNumber){
    var guessmore = prompt('Try again the number I am thinking is more than '+ guess);
    if (parseInt===randomNumber) {
        correctguess= true;
    }
}else if(parseInt(guess)> randomNumber){
    var guessless = prompt('Try again the number I am thinking is less than '+ guess);
    if (parseInt ===randomNumber) {
        correctguess=true;
    }
}
if (correctguess===true) {
    document.write('<p> Alass!! you guess right</p>');
}else {
    document.write('<p>sorry you are wrong the number was '+ randomNumber + '</p>');   
}










8