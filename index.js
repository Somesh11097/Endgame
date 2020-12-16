var readlineSync = require('readline-sync');
var chalk = require('chalk');


var score = 0;
var userName = readlineSync.question("What's your name?");

console.log("Welcome " + userName + " to DO YOU KNOW Somesh");





//play funtion
function play(question, answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right");
    score = score + 1;
  }else{
    console.log("wrong");
     score = score - 1;
  }

  console.log("Current Score is: " +score);
    console.log("-----------");
}

//array of objects
var questions = [{
  question: "Where do i live" ,
  answer : "Kalyan"
},{
  question : "My Fav Superhero would be " ,
  answer :"Batman"
},{
  question : "What's my Age " ,
  answer :"22"
}];



//loop
for(var i = 0 ; i<questions.length;i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question , currentQuestion.answer);
}

console.log("YAY! You Scored: " +score);

