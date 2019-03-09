    // // quiz begins, no answer correct 
    // var correct = 0; 

    // // ask questions

    // var answer1 = prompt ('In which country were the first Olympic Games held?');
    // if (answer1.toUpperCase() === 'GREECE') { 
    //     correct += 1; 
    // }
    // var answer2 = prompt ('What should you do in swordplay when you break your saber?');
    // if (answer2.toUpperCase() === 'REPLCE IT') { 
    //     correct += 1; 
    // }
    // var answer3 = prompt ('Which car won Fernando Alonso his first tittle in Formula 1 with?');
    // if (answer3.toUpperCase() === 'RENAULT') { 
    //     correct += 1; 
    // }
    // var answer4 = prompt ('What was the Olympic city of 1992 ?');
    // if (answer4.toUpperCase() === 'BARCELONA') { 
    //     correct += 1; 
    // }
    // var answer5 = prompt ('In which country is the Interlagos F1-circuit ?');
    // if (answer5.toUpperCase() === 'BRAZIL') { 
    //     correct += 1; 
    // }
    // //output results
    // document.write("<p> you got " + correct + " out of five answer.</p>");

    // // output rank
    // if ( correct === 5){
    //     document.write ("<p> <strong> you earned a gold crown! </strong> </p>")

    // } else if (correct >=3) {
    //     document.write ("<p> <strong> you earned a bronze crown! </strong> </p>")
        
    // }else if (correct >1) {
    //     document.write ("<p> <strong> you earned no crown! </strong> </p>")
        
    // }else{
    //     document.write ("<p> <strong> you need to study </strong> </p>")
    // }


    // Functions

    // function alertRandom(area) {
    //     var rand = Math.floor(Math.random()*area);
    //     alert (rand); 
    // }

    // alertRandom(47);
    // alertRandom(23);
    // alertRandom(23);
    // alertRandom(42);
    // alertRandom(52); 


    // function areaOfCircle(radius){
    //     var area = Math.floor(2 *( 22.4 * radius * radius)) ;
    //     document.write (area +  ' is the area of circle with radius '+ radius); 
    // }

    // areaOfCircle(2,4);
    // areaOfCircle(3,8);
    // areaOfCircle(67,9);

    // var r = prompt('Enter the value of radius to get the area');
    // var userinput = parseInt (r);

    // areaOfCircle(userinput);

    // while loop

    // function rand(input){
    //     var random = Math.floor(Math.random() *input) +1;
        
    //     document.write('random numbers are '+ random);
    // }

    // rand(userint)
    // var user =prompt('Enter the value for test')
    //     var userint= parseInt (user)

//  function random(upper){
//      var rand = Math.floor(Math.random() *upper) +1;
//      return rand;
//  }
//     var counter =0;
//     while (counter <10000) {
//         var randnum = random(6);
//         document.write (randnum +'');
//       counter++; 
//    }

// function randomNumber (upper){
//     var rand = Math.floor (Math.random() *upper) +1;
//     return rand;
// }
//    var counter =0;
//    while(counter<15){
//        var randnum  = randomNumber(6);
       
//        document.write(randnum + '');
//        counter++;

// }
//  program to show how many time a counter ran to guess a number right 
// var upper =1000;
// var guess;
// var rand = randomNumber(upper);
// var attempts= 0;

// function randomNumber (upper){

//     var rand = Math.floor (Math.random()*upper) +1;
// }

// while (guess !== rand){
//     guess = randomNumber(upper);
//     attempts++;

// }
// document.write('the guess number is ' + rand);
// document.write('it took '+ attempts +' attempts to get the number right ');


// var randomNumber = getRandomNumber(10);
// var guess;
// var guessCount = 0;
// var correctGuess = false;

// function getRandomNumber(upper){
//     var num = Math.floor(Math.random() *upper) +1;
//     return num;
// }
//  do {
//      guess = prompt ('I am thinking of a number between 1 and 10. What is it?');
//      guessCount++;
//      if (parseInt(guess) ===randomNumber){
//      correctGuess =true;
//      }

//  } while (!correctGuess);

//  document.write ('<h1> You guessed the number!<h1>');
//  document.write ('<p>It took you '+ guessCount+'tries to guess the number </p>'  +''+ randomNumber);


