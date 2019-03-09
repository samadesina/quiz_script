            // checking if user is interested or not
            var name = prompt("Enter your name");
            var user_name = parseInt(name);

            // Promt for user to enter if th    ey will play the game or not:
            var sport = prompt ("Hey "+ name + " here is a quiz application to help you in football world, would you love to play the game? If yes enter Y if No Enter No");

            // Testing users entry 
            if (sport === 'yes' || sport=== 'y') {

            var querynumber = prompt("Hey " + name +" Welcome to the world of sport have a nice time Enter number of question to answer first press okay to continue");
            
                var qnumber = parseInt(querynumber);

                if (qnumber === 1|| qnumber === 2|| qnumber === 3|| qnumber === 4|| qnumber === 5) {

                    // declaration of variable for questions
                
                var question1 = ('In which year did Maradona score a goal with his hand?');
                var question2 = ('What is the national sport in Japan?')
                var question3 = ('How many minutes is a rugby match?');
                var question4 = ('In which country were the first Olympic Games held?');
                var question5 = ('How many players are on each side of the net in beach volleyball?'); 

            // math function to generate random number:
            var randomQuestion = Math.floor(Math.random()*5);

            // Asingning what user enters into the random number
            randomQuestion = qnumber;


            // testing and showing the values which users have entered:
            if (randomQuestion===0) {
                prompt ('Question '+ qnumber+': ' +''+ question1);   
            } else if(randomQuestion===1){
                prompt ('Question '+ qnumber+': ' +''+ question2);
            }else if(randomQuestion===2){
                prompt ('Question '+ qnumber+': ' +'' + question3)
            }else if(randomQuestion===3){
                prompt ('Question '+ qnumber+': ' +''+ question4)
            }else if(randomQuestion===4){
                prompt ('Question '+ qnumber+': ' +''+ question5)
            }else{
                document.write("No question is the range refresh your page and start all over");
            }

                
            // declaring variables for answers
            var answer1 = parseInt('1986');
            var answer2 = SumoWrestling;
            var answer3 = '80 Minutes';
            var answer4 = Greece;
            var answer5 = Twoplayers;

            // checking if what the user input is correct
            if (parseInt(question1) === answer1 ){
                document.write ('yea correct');
                

            }else if (question2 === answer2) {
                document.write ('yea correct');

            }else if (question3 === answer3) {
            document.write ('yea correct');

            }else if (question3 === answer3) {
                document.write ('yea correct');

            }else if (question4 === answer4) {
            document.write ('yea correct'); 

            }else if (question5 === answer5) {
            document.write ('yea correct'); 
            
            } else{
                document.write ('sorry you are wrong');
            } 
                    
                }else{
                    prompt ('Hey' +name + ' Enter value ranges from 1 t0 5')
                }
            }else{
                document.write ("Hey " +name +"have a great day buddy!!");
            }










            


            