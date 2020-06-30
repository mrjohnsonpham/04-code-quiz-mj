# 04-code-quiz-mj

What you are viewing is a Michael Jordan Themed Multiple Choice Trivia Quiz which features a responsive layout, dynamic HTML, CSS, and Javascript code all on a clean and polished user interface.


What your landing page is offering: 
-- You are introduced by an animated css of the text title of the game and basketball cursor.
-- You are also given the option to play Michael Jordan's Theme song as you play. 

When you click start game:

-- Once you click start game, you will be presented by a series of 6 questions and 4 choices which will be initiated through an event listener and a for loop which will populate the questions, choices, and timer. 

-- Each choice answer is an data answer which is strictly assigned to help keep track of the total score answered correctly and incorrectly. 

-- Through an if/else comparison, if the user answers the question incorrectly, the user will be penalize by having their total score decremented by -5 seconds. 

-- As you answer each question, regardless if it correct/incorrect, the user will be able to move onto the next question.

-- Be mindful that the timer is set to 23 seconds, if you run out of time. The quiz will end and alert the user "times up!".

-- As you reach towards the end of the game, you will be presented with your results of total answered correctly, total answered incorrectly, a final display of your final score and lastly the option to enter in your name for the scoreboard which will be stored in localStorage which can be obtained using JSON.stringify, JSON.parse, and getItem from localStorage.

## Deployed Links
1. https://github.com/mrjohnsonpham/04-code-quiz-mj
2. https://mrjohnsonpham.github.io/04-code-quiz-mj/
