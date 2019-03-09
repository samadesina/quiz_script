var input = prompt ("type the number you want");
var topNumber = parseInt (input);
var randomNumber = Math.floor (Math.random() * topNumber) +1000;
var message = ( "hey your pin code is " +randomNumber );
document.write (message);