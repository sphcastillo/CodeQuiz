var QuizQuestionsAnswers = [
    {
    question : "What was the date range of the Tudor Dynasty?",
    one : "1461-1489",
    two : "1509-1568",
    three : "1464-1592",
    four : "1485-1603",
    correct : "1485-1603"
    },
    {
    question : "The marriage between Henry VII and ___________  in 1486 was seen as marking the end of the War of Roses.",
    one : "Mary Tudor",
    two : "Margaret Beaufort",
    three : "Elizabeth Woodville",
    four : "Elizabeth of York",
    correct : "Elizabeth of York"
    },
    {
    question : "What Tudor reigned as queen for nine days (July 10-19, 1553)?",
    one : "Lady Katherine Grey",
    two : "Lady Frances Brandon",
    three : "Lady Jane Grey",
    four : "Margaret Douglas, Countess of Lennox",
    correct : "Lady Jane Grey"
    },
    {
    question : "Henry VIII had an older brother, who married Catherine of Aragon and would have become king before him, had he not died. What was this brother's name?",
    one : "Phillip",
    two : "Arthur",
    three : "James",
    four : "William",
    correct : "Arthur"
    },
    {
    question : "The houses of Lancaster and York were two rival branches of the royal House of ______________________",
    one : "Cromwell",
    two : "Leicester",
    three : "Warwick",
    four : "Plantagenet",
    correct : "Plantagenet"
    },
    {
    question : "Who was Henry VIII's sixth and last wife?",
    one : "Anne Boleyn",
    two : "Katherine Howard",
    three : "Catherine Parr",
    four : "Bessie Blount",
    correct : "Catherine Parr"
    },
    {
    question : "On August 22, 1485, _________'s army fought against Henry Tudor's army at the Battle of Bosworth. Henry Tudor was the victor and became Henry VII of England.",
    one : "Edward IV",
    two : "Richard III",
    three : "Edward VI",
    four : "George, Duke of Clarence",
    correct : "Richard III"
    },
    {
    question : "Historians acknowledge that Richard III is the most likely candidate to have orchestrated the murder of __________.",
    one : "Mary, Queen of Scots",
    two : "Amy Robsart",
    three : "Henry VI of England",
    four : "the princes in the tower (Prince Richard and Prince Edward)",
    correct : "the princes in the tower (Prince Richard and Prince Edward)"
    },
    {
    question : "Henry VIII believed the reason his first wife, Katherine of Aragon, had not produced a healthy son was because he was being punished by God. What verse in the Bible did he use to present his argument?",
    one : "A man who takes his brother's wife will bear no children",
    two : "A man who takes his dead brother's wife will bear only daughters",
    three : "A man who takes his dead brother's wife will only have one healthy child",
    four : "A man who takes a wife older than himself will bear no children",
    correct : "A man who takes his brother's wife will bear no children"
    },
    {
    question : "Who was Henry VIII's fifth wife, the second to be beheaded?",
    one : "Jame Seymour",
    two : "Katherine Howard",
    three : "Anne Boleyn",
    four : "Anne of Cleves",
    correct : "Katherine Howard"
    }
        
    ];
    


// The header //
var theNav =  document.getElementById("navigation");

var viewHighScore = document.getElementById("viewHighScores");

var timerCountdown = document.getElementById("timerCountdown");


// Quiz Opening Page // 

var quizOpeningPage = document.getElementById("theOpeningPage");

var theStartButton = document.getElementById("quizOpenerStartButton");



// Quiz Questions //

var pagesOfQuestionsandAnswers = document.getElementById("questionsAndAnswers");

var question = document.getElementById("theQuestion");

var divHoldingTheAnswerOptions = document.getElementById("insideQuestionContent");

var optionOne  = document.getElementById("firstOption");
var optionTwo = document.getElementById("secondOption");
var optionThree = document.getElementById("thirdOption");
var optionFour = document.getElementById("fourthOption");

var correctAnswer = document.getElementById("correct");

var showcaseCorrectAnswer = document.getElementById("theCorrectAnswer");



// The User's Final Score  //  

var finalUserScorePage = document.getElementById("finalScorePage");

var done = document.getElementById("done");

var theFinalScore = document.getElementById("yourIndividualFinalScore");

var savingUserName = document.getElementById("savingUserName");
var labeltoInputUserName = document.getElementById("letUsSaveUserScore");
var userNameInput = document.getElementById("userName");

var submitButton = document.getElementById("submitButton");


// Viewing list of the highest scores //

var highScorePage = document.getElementById("highScores");

var scoresGoHere = document.getElementById("scoresGoHere");

var goBackButton = document.getElementById("goBackButton");
var clearScoresButton = document.getElementById("clearTheScores");


// Starting the quiz with the score of 0

var score = 0;
var index = 0;
var secondsLeftOnTimer = 90;


var gameHighScores = JSON.parse(localStorage.getItem("gameHighScore")) || []

console.log("game high score", gameHighScores);


var correctAnswerText = correctAnswer.textContent;
correctAnswerText = QuizQuestionsAnswers[0].correct;



function startQuiz(){

    quizOpeningPage.removeAttribute("id");
    pagesOfQuestionsandAnswers.setAttribute("class","showElement");
    quizOpeningPage.setAttribute("class","hideElement");
    
    setTime();
    

    presentTheQuestions();
}


function setTime(){
    
    var timerInterval =  setInterval(() => {
        secondsLeftOnTimer --;
        timerCountdown.textContent = "Timer: " + secondsLeftOnTimer;

        if(secondsLeftOnTimer === 0 ){
            clearInterval(timerInterval);
        
        }
        
    }, 1000);
}


function presentTheQuestions(){


    var i =  QuizQuestionsAnswers[index];

    
    var textContent = question.textContent;
    textContent = QuizQuestionsAnswers[0].question;
    
    
    question.innerHTML = i.question;
    
    optionOne.innerHTML = i.one;
    optionTwo.innerHTML = i.two;
    optionThree.innerHTML = i.three;
    optionFour.innerHTML = i.four;

}



function continueOn(){

    if(QuizQuestionsAnswers.length === index){
        
        finalScorePage();
        return;
    }

    question.innerHTML = QuizQuestionsAnswers[index].question;

    optionOne.innerHTML = QuizQuestionsAnswers[index].one;
    optionTwo.innerHTML = QuizQuestionsAnswers[index].two;
    optionThree.innerHTML = QuizQuestionsAnswers[index].three;
    optionFour.innerHTML = QuizQuestionsAnswers[index].four;


}



function finalScorePage(){
    console.log("you have entered finalScorePage funcion");

    pagesOfQuestionsandAnswers.setAttribute("class","hideElement");
    finalUserScorePage.setAttribute("class", "showElement");

    theFinalScore.textContent= score + "/" + QuizQuestionsAnswers.length;

}


function openingPage(){

    console.log("back to opening page/ openingPage()");

    timerCountdown.removeAttribute("id","timerCountdown");

    quizOpeningPage.removeAttribute("class","showElement");
    pagesOfQuestionsandAnswers.setAttribute("class","hideElement");

    resetTheVariables();
    setTime();
    presentTheQuestions();
    
}


function scoreKeeper(highScore){
    console.log("We have a name");

    for(var i = 0; i < highScore.length; i ++){

        var li = document.createElement("li");
        li.textContent = highScore[i].name;
        scoresGoHere.appendChild(li);
        var spanEl = document.createElement("span")
        spanEl.textContent = highScore[i].score;
        li.append(spanEl);
        
    }

}


function computingScore(){

    console.log("doing work with the name");

    var highScoreProp = {
        name: "",
        score: 0
    
    }
    highScoreProp.name = userNameInput.value + " ";
    highScoreProp.score = score;
    
    gameHighScores.push(highScoreProp);
    
    localStorage.setItem("gameHighScore",JSON.stringify(gameHighScores));



    scoreKeeper(gameHighScores);
    userNameInput.value = "";


}

function ontoHighScoresPage(){
    console.log("inside high scores function");

    finalUserScorePage.setAttribute("class", "hideElement");
    highScorePage.setAttribute("class", "showElement");


}

function resetTheVariables(){
    console.log("resetting our variables");

    score = 0;
    index = 0;
    secondsLeftOnTimer = 90;

    //if you click the start button

}



// Event Listeners //


submitButton.addEventListener("click", function(){
    console.log("your submission");

    computingScore();

    ontoHighScoresPage();

})


viewHighScore.addEventListener("click", function(){
    console.log("view the competition");

    quizOpeningPage.setAttribute("class", "hideElement");
    quizOpeningPage.removeAttribute("id");
    highScorePage.setAttribute("class","showElement");
})



theStartButton.addEventListener("click", startQuiz)





goBackButton.addEventListener("click", function(){
    console.log("return to main page");

    highScorePage.setAttribute("class","hideElement");

    openingPage();
})



// add a click event to the button that will clear all data from localStorage
clearScoresButton.addEventListener("click",function(){

    console.log("clear this out NOW");

    localStorage.clear();
    // as well as removing from browser
    while(scoresGoHere.firstChild){
        scoresGoHere.removeChild(scoresGoHere.firstChild);
    }


})
    

optionOne.addEventListener("click", function(e){
    e.preventDefault();
    
    if(this.textContent !=  QuizQuestionsAnswers[index].correct){
        console.log("wrong answer");
        if(secondsLeftOnTimer <= 0){
            secondsLeftOnTimer = 0;
            openingPage();
        } else {
            secondsLeftOnTimer -= 10;
        }
    }
    else{
        score++;
        console.log("score: ", score);
    }
    index++;
    continueOn();
    
})



optionTwo.addEventListener("click", function(e){
    e.preventDefault();

    if(this.textContent !=  QuizQuestionsAnswers[index].correct){
        console.log("wrong answer");
        if(secondsLeftOnTimer <= 0){
            secondsLeftOnTimer = 0;
            openingPage();
        } else {
            secondsLeftOnTimer -= 10;
        }
    }
    else{
        score++;
        console.log("score: ", score);
    }
    index++;
    continueOn();

})

optionThree.addEventListener("click", function(e){
    e.preventDefault();


    if(this.textContent !=  QuizQuestionsAnswers[index].correct){
        console.log("wrong answer");
        if(secondsLeftOnTimer <= 0){
            secondsLeftOnTimer = 0;
            openingPage();
        } else {
            secondsLeftOnTimer -= 10;
        }
    }
    else{
        score++;
        console.log("score: ", score);
    }

    index++;
    continueOn();

})



optionFour.addEventListener("click", function(e){
    e.preventDefault();


    if(this.textContent !=  QuizQuestionsAnswers[index].correct){
        console.log("wrong answer");
        
        if(secondsLeftOnTimer <= 0){
            secondsLeftOnTimer = 0;
            openingPage();
        } else {
            secondsLeftOnTimer -= 10;
        }
    }
    else{
        score++;
        console.log("score: ", score);
    }

    index++;
    continueOn();

})

