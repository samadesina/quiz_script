// var questions = [
//                 ['what is my name', 1],
//                 ['how many apple is here',3],
//                 ['how many days are in a week',2]
//                 ];
// var answer;
// var response;
// var question;
// var correctAnswers =0;
// var html;

// function printMessage(mess){
//   document.write(mess);
// }

// for(var i=0; i<questions.length; i++){
//    question = questions[i][0];
//    answer = questions[i][1];
//    response = parseInt(prompt(question))
//    if(response === answer){
//      correctAnswers ++;

//    }
// }

// html = "you have got " +correctAnswers + "question(s) right ";

// printMessage(html);


var questions = [['what is my name ', 1]
                 ['How old is him ', 14]
                 ['what class are you', 3]
              ];
var question;
var response;
var correctAnswers =0;
var html;
var answer;

function print(message){
  document.write(message);
}
for (var i = 0; i<questions.length; i++){
  question= questions[i][0];
  answer = question[i][1];
  response = parseInt(prompt(question));
  if(answer=== response){
    correctAnswers+=1
  }

}

html = document.write('you answer'+correctAnswers+'');
print(html);