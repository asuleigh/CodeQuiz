//Create variables for timer, buttons, and questions
var startButton = document.getElementById("start");
var questionHead = document.getElementById("question");
var resultsList = document.getElementById("answers");
var quizTime = document.getElementById("timer");
var score = document.getElementById("finalScore");
var scoreButton = document.getElementById("scoreSubmit")

var countdown = (question.length * 20 + 1);
var questionArray = -1;
var questionNum = 0;
var time;
// var mySound;

// Starts quiz and loads start and questions page
startButton.addEventListener("click", startQuiz);

function startQuiz() {
    document.getElementById("startPage").classList.add("d-none");
    document.getElementById("begTime").classList.add("d-none");
    document.getElementById("qaPage").classList.remove("d-none");
    
    // mySound= new sound("Assets\sounds\correct.wav");

    startQuizTime();
    loadQuestions();
    
    time = setInterval(startQuizTime, 1000);
};

// Creates and sets a timer for the quiz. Clears timer interval when finished
function startQuizTime() {
    countdown--;
    quizTime.textContent = "Time: " + countdown;

    if (countdown == -1) {
        clearInterval(time);
        }
        finished();
    };

// Grab question array and load into respective divs on question page; Style buttons with setAttribute
// This function renders the multiple-choice options on the HTML page as buttons
function loadQuestions() {
    questionArray++;

    questionHead.textContent = question[questionArray].title;
    resultsList.innerHTML = "";

    var choices = question[questionArray].choices;
    answer = question[questionArray].answer

    for (var i = 0; i < choices.length; i++) {
        var nextChoice = document.createElement("button");

        nextChoice.textContent = choices[i]
        answerButton = resultsList.appendChild(nextChoice)
        .setAttribute("class", "btn btn-sm btn-info btn-block w-25");
    };
    finished();
};

// Get answers and check user's choices for correctness. Set timeout for display message
resultsList.addEventListener("click", function (event) {
    var choice = document.getElementsByClassName("results")[0]

// If the answer is correct, render the message "correct!" and move to the next question/end
    if (answer === event.target.textContent) {   
        choice.innerHTML = `<hr>` + `<div style="font-style:italic; font-weight:bold; 
        color: #27a7b3;">` + "Correct" + `</div>`;

        setTimeout(stashResults,1000);
        getResults();   
        // mySound.play();
    } 
    
// If the answer is incorrect, subtract 5 seconds from total time
    else {
        choice.innerHTML =`<hr>` + `<div style="font-style:italic; font-weight:bold; 
        color: #27a7b3;">` + "Incorrect" + `</div>`;
        countdown = countdown - 5;
        // score = score - 10;

        setTimeout(stashResults,1000);
        getResults();
    }    

// Load next question
    loadQuestions();
    finished();
});

// Get results after answering question
function getResults() {
    var choice= document.getElementsByClassName("results")[0];

    choice.removeAttribute("style");
    finished();
};

// Stash results after answering question
function stashResults() {
    var choice= document.getElementsByClassName("results")[0];

    choice.style.display="none";
    finished();
};

// Checks to see if out of question loop or timer has finished and sends user 
// to score page for their final score. Clears timer interval when finished
function finished() {
    if (questionArray >= 3 || countdown <= 0) {
      document.getElementById("qaPage").classList.add("d-none");
      document.getElementById("finalPage").classList.remove("d-none");
      document.getElementById("finalScore").innerHTML = countdown;
      
      score.textContent = countdown;
  
      clearInterval(time);
    };
  };



// Add event for submit button on index finalScore page
scoreSubmit.addEventListener("click", function (event) {
    event.stopPropagation();
    saveScore();

    console.log(localStorage);

    window.location.href = './highScores.html'
});

// Function for getting and storing user initials and scores 
// for the highScores page
function saveScore () {
    userInitials = document.getElementById("initialsValue").value
    
    var userScore = {
            initials: userInitials,
            score: countdown
        };

    var userScoreList = JSON.parse(localStorage.getItem("userScoreList") || "[]");

    userScoreList.push(userScore)

    localStorage.setItem("userScoreList", JSON.stringify(userScoreList));
};























// function pushHighScores() {
//     var userScoreDiv = document.getElementById(
//       "userScoreOb"
//     );

//     var storedHighScores = localStorage.getItem("userScoreList");
//     if (storedHighScores == null) {
//       document.getElementById("scoreList").remove();
//       return;
//     }

//     storedHighScores = JSON.parse(storedHighScores);
//     console.log("list", storedHighScores);
//     console.log(userScoreDiv);

//     //Variable that creates the ordered list to store the user initials and high score
//     var containerList = document.createElement("ol");
//     containerList.setAttribute("id", "scoreList");
//     for (var i = 0; i < storedHighScores.length; i++) {
//       var highScore = document.createElement("li");
//       highScore.setAttribute(
//         "class",
//         "list-group-item list-group-item-success"
//       );
//       highScore.innerHTML =
//         storedHighScores[i].initials + " " + storedHighScores[i].score;

//       containerList.appendChild(highScore);
//     }
//     userScoreDiv.appendChild(containerList);
//   }
//   renderHighScores();

//   //This code allows the user to clear the local storage once the quiz is finished
//   var clearButton = document.querySelector("#clear-storage");
//   clearButton.addEventListener("click", function() {
//     localStorage.removeItem("highScoreList");

//     pushHighScores();
//   });

// var restartButton = document.querySelector("button.restartButton"),
//     clearButton = document.querySelector("button.clearButton"),

//     // get the highScores list and turn it back into an object
//     userScoreList = JSON.parse(localStorage.getItem("userScoreList") || "[]"),
//     scoreOb = document.getElementById("userScoreOb");

//     // sort scores from high to low
//     userScoreList.sort(function (a,b){
//         return b.score - a.score
//     })

//     // display the scores
//     for (var s = 0; s < userScoreList.length; s++) {
//         var nextList= document.createElement("li")
//         nextList.textContent = userScoreList[s].initials + " - " + userScoreList[s].score
//         scoreOb.appendChild(nextList)
//     }


// // click handlers for restart and clearing scoreboard
// clearButton.addEventListener("click", function () {
//     localStorage.clear();
//     history.back()
// });
// restartButton.addEventListener("click", function () {
//     history.back();
// });

