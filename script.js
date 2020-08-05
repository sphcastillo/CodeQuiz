var QuizQuestionsAnswers = [
    {
    question : "What was the date range of the Tudor Dynasty?",
    one : "1461-1489",
    two : "1509-1568",
    three : "1464-1592",
    four : "1485-1603",
    correct : 4
    },
    {
    question : "The marriage between Henry VII and ___________  in 1486 was seen as marking the end of the War of Roses",
    one : "Mary Tudor",
    two : "Margaret Beaufort",
    three : "Elizabeth Woodville",
    four : "Elizabeth of York",
    correct : 4
    },
    {
    question : "What Tudor reigned as queen for nine days (July 10-19, 1553)?",
    one : "Lady Katherine Grey",
    two : "Lady Frances Brandon",
    three : "Lady Jane Grey",
    four : "Margaret Douglas, Countess of Lennox",
    correct : 1
    },
    {
    question : "Henry VIII had an older brother, who married Catherine of Aragon and would have become king before him, had he not died. What was this brother's name?",
    one : "Phillip",
    two : "Arthur",
    three : "James",
    four : "William",
    correct : 2
    },
    {
    question : "The houses of Lancaster and York were two rival branches of the royal House of ______________________",
    one : "Cromwell",
    two : "Leicester",
    three : "Warwick",
    four : "Plantagenet",
    correct : 4
    },
    {
    question : "Who was Henry VIII's sixth and last wife?",
    one : "Anne Boleyn",
    two : "Katherine Howard",
    three : "Catherine Parr",
    four : "Bessie Blount",
    correct : 3
    },
    {
    question : "On August 22, 1485, _________'s army fought against Henry Tudor's army at the Battle of Bosworth. Henry Tudor was the victor and became Henry VII of England.",
    one : "Edward IV",
    two : "Richard III",
    three : "Edward VI",
    four : "George, Duke of Clarence",
    correct : 2
    },
    {
    question : "Historians acknowledge that Richard III is the most likely candidate to have orchestrated the murder of __________",
    one : "Mary, Queen of Scots",
    two : "Amy Robsart",
    three : "Henry VI of England",
    four : "the princes in the tower (Prince Richard and Prince Edward)",
    correct : 4
    },
    {
    question : "Henry VIII believed the reason his first wife, Katherine of Aragon, had not produced a healthy son was because he was being punished by God. What verse in the Bible did he use to present his argument?",
    one : "A man who takes his brother's wife will bear no children",
    two : "A man who takes his dead brother's wife will bear only daughters",
    three : "A man who takes his dead brother's wife will only have one healthy child",
    four : "A man who takes a wife older than himself will bear no children",
    correct : 1
    },
    {
    question : "Who was Henry VIII's fifth wife, the second to be beheaded?",
    one : "Jame Seymour",
    two : "Katherine Howard",
    three : "Anne Boleyn",
    four : "Anne of Cleves",
    correct : 2
    }
        
    ];
    




// The header //
var theNav =  document.getElementsByClassName("container");

var viewHighScore = document.getElementById("viewHighScores");

var timerCountdown = document.getElementById("timerCountdown");


// Quiz Opening Page // 

//var quizOpeningPage = document.getElementsByClassName("quizOpenerPage");

var theStartButton = document.getElementById("quizOpenerStartButton");




// Quiz Questions //
var question = document.getElementById("theQuestion");

var divHoldingTheAnswerOptions = document.getElementById("insideQuestionContent");

var optionOne  = document.getElementById("firstOption");
var optionTwo = document.getElementById("secondOption");
var optionThree = document.getElementById("thirdOption");
var optionFour = document.getElementById("fourthOption");

var correctAnswer = document.getElementById("correct");

var showcaseCorrectAnswer = document.getElementById("theCorrectAnswer");



// The User's Final Score  //  

var finalUserScorePage = document.getElementsByClassName("container");
var done = document.getElementById("done");

var theFinalScore = document.getElementById("yourIndividualFinalScore");

var savingUserName = document.getElementById("savingUserName");
var labeltoInputUserName = document.getElementById("letUsSaveUserScore");
var userNameInput = document.getElementById("userName");

var submitButton = document.getElementById("submitButton");


// Viewing list of the highest scores //

var highScorePage = document.getElementsByClassName("highScores");

var scoresGoHere = document.getElementById("scoresGoHere");

var goBackButton = document.getElementById("goBackButton");
var clearScoresButton = document.getElementById("clearTheScores");


// Starting the quiz with the score of 0
var score = 0;
var index = 0;
var secondsLeftOnTimer = 60;


var namesArray = [];
localStorage.setItem("names", JSON.stringify(namesArray));
var data = JSON.parse(localStorage.getItem("names"));




function startQuiz(){
    console.log("inside Start Quiz");
    //  a timer starts
    
    setTime();
    // presented with a question

    presentTheQuestions();
}


function setTime(){

    console.log("inside setTime function");
    
    var timerInterval =  setInterval(() => {
        secondsLeftOnTimer --;
        timerCountdown.textContent = "Timer: " + secondsLeftOnTimer;

        if(secondsLeftOnTimer === 0){
            clearInterval(timerInterval);
        
        }
        
    }, 1000);
}


function presentTheQuestions(){
    console.log("let's see the questions");

    var i =  QuizQuestionsAnswers[index];

    console.log(i);

    question.innerHTML = i.question;
    optionOne.innerHTML = i.one;
    optionTwo.innerHTML = i.two;
    optionThree.innerHTML = i.three;
    optionFour.innerHTML = i.four;


    optionOne.addEventListener("click", function(e){
        e.preventDefault();
        console.log("option 1 works");
        checkButtonAnswers();
    })

    optionTwo.addEventListener("click", function(e){
        e.preventDefault();
        console.log("option 2 works");
        checkButtonAnswers();
    })

    optionThree.addEventListener("click", function(e){
        e.preventDefault();
        console.log("option 3 works");
        checkButtonAnswers();
    })

    optionFour.addEventListener("click", function(e){
        e.preventDefault();
        console.log("option 4 works");
        checkButtonAnswers();
    })
}


function checkButtonAnswers(){

    console.log("inside check button answers");

    // user's selection
    // compare user's  selection to correct answer

    // if statements

    // if it is wrong, add additional time to the timer

    index ++;
    presentTheQuestions();
}


// when  you get the incorrect answer
function answerIncorrect(){

    secondsLeftOnTimer  -= 10;

    continueOn();
}


//userNameInput
function scoreKeeper(){

    var li = document.createElement("li");
    li.textContent = text;
    scoresGoHere.appendChild(li);


}


submitButton.addEventListener("click", function(){
    console.log("your submission");

    namesArray.push(userNameInput.value);
    localStorage.setItem("names",JSON.stringify(namesArray));

    scoreKeeper(userNameInput.value);
    userNameInput.value = "";

    data.forEach(function(name){
        scoreKeeper(name);
        console.log("name", name);
    })


})




viewHighScore.addEventListener("click", function(){
    console.log("view the competition");
})



theStartButton.addEventListener("click", function(){
    console.log("let's begin");

    startQuiz();

})

submitButton.addEventListener("click", function(){
    console.log("your submission");

})



goBackButton.addEventListener("click", function(){
    console.log("return to main page");


})


// add a click event to the button that will clear all data from localStorage
clearScoresButton.addEventListener("click",function(){
    console.log("clear this shit!");

    localStorage.clear();
    // as well as removing from browser
    while(scoresGoHere.firstChild){
        scoreKeeper.removeChild(scoresGoHere.firstChild);
    }


})