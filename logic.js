// Array of Michael Jordan's Trivia Question, we will pull from and create a function with.
var quizQuestions = [  

    { 
        questions:      "Jordan grew up in North Carolina, but where was he born?",
        choices:        ["Los Angeles", "New York City", "Hamburg", "Miami"],
        correctAnswer:  "New York City"
    },
    {
        questions:      "What is Jordan's middle name?",
        choices:        ["Jeffrey","Raymone","Michael","He doesn't have a middle name"],
        correctAnswer:   "Jeffrey"
        

    },
    {
        questions:      "Jordan was marked out as a future NBA star during a stellar college career. Where he did attend college?",
        choices:        ["North Carolina", "Duke", "Kentucky", "Kansas"],
        correctAnswer:  "North Carolina"
        
    },
    {
        questions:      "How many points did Jordan average per game?",
        choices:        ["27.1", "30.1", "33.1", "36.1"],
        correctAnswer:  "30.1"
    },

    {
        questions:      "How many Olympic Gold Medals did Jordan win in his career",
        choices:        ["0", "1", "2", "3"],
        correctAnswer:  "2"
    },
    {
    
        questions:      "Jordan is one of the greatest athletes of all time. What is Jordan's estimated net worth",
        choices:        ["$900m", "$1.3bn", "$1.7bn", "$2.1bn"],
        correctAnswer:  "$2.1bn"

    }

    
];

//List of values
var secondsLeft = 23;                
// keeping track of the amount of question 
var currentQuestion = 0;       
 // currentQuestion will start at the index of 0. 
var score = 0;                 
 // score will be tracked at 0
var lost = 0;        
// amount of questions answered incorrectly           
var timer;                   


function countDown() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        $("#time").html("Timer: " + secondsLeft); 
        // score.textContent= "";
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            displayResult();
            lostGame();
        }
    }, 1000);

}

function stopTimer() {
    clearInterval(timerInterval);
}

// Event listeners 
//On start click removes the start Id from body and runs the countDown() to decrement time. also loads next question
$("#start").click(function() {
    $("#start").remove();
    // $("#start").html(secondsLeft--);
    countDown();
    loadQuestion();

});;




//Display the questions, choices and creating a function to pick the current question and load

//goes to ID of game and inside the html will create an h4 that populates the question and below it will populate the choices and also populate the remaining questions in fraction form.

function loadQuestion() {
    console.log("is thing loading the question")
    // timer = setInterval(countDown(), 1000);
    // the variable time will be assigned a setInterval(countdown, 1000)

    const question = quizQuestions[currentQuestion].questions;
    // const question will be assigned the variable array we have made our questions with and have the current index of 0 and display the questions.
    const choices =  quizQuestions[currentQuestion].choices;
        // const question will be assigned the variable array we have made our questions with and have the current index of 0 and display the choices.

    // $("#time").html("Time Remaining: " + secondsLeft);
   // created a class from the html h2 id="time" and added the counter 
    //Displaying the question and function that has the choices
    $("#game").html(`
        
        <h4>${question}</h4> 
        ${loadChoices(choices)}
        ${loadRemainingQuestion()}
        
    
    `);
    
}    


//
function loadChoices(choices) {
    var result = " ";

    // created a loop that will go over the choices till theres no more
    for (var i = 0; i < choices.length; i++) {
    //setting a data answer with every value of choices and also displaying them 
        result += `<p class="choice" data-answer="${choices[i]}">${choices[i]}</p>`;
    }
    return result;

}

// this was added after all the questions and choices were able to seen
// allowing the user to click and choose their answer
$(document).on("click", ".choice",function() {
    // clearInterval(timer);
    var selectedAnswer = $(this).attr("data-answer");
    var correctAnswer = quizQuestions[currentQuestion].correctAnswer;
    if (correctAnswer===selectedAnswer){
        score++;
        nextQuestion();
        console.log("wins");
    }
    else{
        lost++;
        secondsLeft -=5;

        // not working
        nextQuestion();
        console.log("loss");
    }
    
});;



function loadRemainingQuestion() {
    var remainingQuestion = quizQuestions.length - ( currentQuestion + 1);
    var totalQuestion = quizQuestions.length;

    return `Remaining Question: ${remainingQuestion}/${totalQuestion}`;
}

//function that checks if the questions array = questions.length. so if 6 = 6 game is over if not go to next question.
function nextQuestion(){
    var isQuestionOver= (quizQuestions.length - 1) === currentQuestion;
    if (isQuestionOver){
        console.log("game is over");
        displayResult();
        stopTimer();
    }   
    
    else{
        currentQuestion++;
        loadQuestion();
    }
    
}

function displayResult() {

    var endScreenEl = document.getElementById("end-screen");
    endScreenEl.removeAttribute("class");
    var finalScoreEl = document.getElementById("final-score");
    finalScoreEl.textContent = score;

    //if you want to make a div hide
   // endScreenEl.setAttribute("class", "hide");

    console.log("inside displayresults ", score);
    window.localStorage.setItem("highscore", score);
    // console.log(JSON.parse(localStorage.getItem("score")));
    //get score value from localestorage 
    // window.localStorage.getItem("score");   // was hidden
    var result = `
    <p>You got ${score} questions(s) right </p.>
    <p>You got ${lost} questions(s) wrong </p.>
    <button class="btn btn-primary" id="reset">Reset Game </button>
    `;
    $("#game").html(result);
    

};


//reset button after they complete the game
$(document).on("click","#reset", function(){
    secondsLeft = 23;
    currentQuestion = 0;
    score = 0;
    lost = 0;
    timer = null;
    loadQuestion()
    console.log("quiz has ended");
    


});

// submit for highscore 
$(document).on("click","#submit", function(){
    if (initials !== "") {
        var initials = document.getElementById("initials").value.trim();   
        console.log(initials);
        var scores = JSON.parse(window.localStorage.getItem("scores")) || [];
        //user input storage format 
        var newScore = {
            score: score,
            initials: initials
        };

        //appending new scores to array of high scores
        scores.push(newScore);
        //add high scores to local storage
        window.localStorage.setItem("scores", JSON.stringify(scores));
        //change url to scores page
        // window.location.href = "scores.html";
        // // not working

    }
});
    