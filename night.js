var questions = [
                ['son age is ', 10]
                ['daughters age is ', 20]
                ['mothers age is ', 30]
                ['fathers age is ', 40]
                ];


var question;
var answer;
var response;
var correctAnswer  = 0;
var html;

function print(message){
    document.write(message);
}
for (var i =0;  i<questions.length; i+=1){
     
     question = questions [i][0];
     answer = questions[i][1];
     response = parseInt(prompt(question));   
     
     if (response === answer) {
         
        correctAnswer+=1;
     }
}

html = 'you got '+ correctAnswer + 'answers right';

print(html);


document.write ('hello welcome to my world');
