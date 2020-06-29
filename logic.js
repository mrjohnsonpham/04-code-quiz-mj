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
        choices:        ["$900m", "$1.3bn", "$1.7bn", "2.1bn"],
        correctAnswer:  "2.1bn"

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
