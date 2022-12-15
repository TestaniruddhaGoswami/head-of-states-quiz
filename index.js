var readlineSync = require('readline-sync');
var score = 0;
var userName = readlineSync.question(" Let us Play the CAPITAL OF COUNTRIES quiz , So What is your name? ");

console.log("Welcome", userName, "to the quiz ")

function play (question,answer){
  var userAnswer = readlineSync.question(question)

  if (userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log("Right!"),
    score = score + 1
  }else{
    console.log("Wrong!")
  }

  console.log("Current Score: ",score)
  console.log("------------")
}


var questions = [ {
  question : "What is the capital of ARMENIA ?  ",
  answer : "yerevan"
},{
  question : "What is the capital of USA ?  ",
  answer : "washington"
},

{
  question : "What is the capital of THAILAND ?  ",
  answer : "bangkok"
},
{
  question : "What is the capital of JAPAN ?  ",
  answer : "tokyo"
},
{
  question : "What is the capital of AUSTRIA ?  ",
  answer : "vienna"
}






 ]

for (var i = 0; i<questions.length; i = i+1){
  currentQuestion = questions[i]
  play(currentQuestion.question,currentQuestion.answer)
}

console.log("Yay! you Scored ", score, "points")