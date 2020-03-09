//Create variables for timer, buttons, and questions
var startButton = document.getElementById("start");
var questionHead = document.getElementById("question");
var resultsList = document.getElementById("answers");
var quizTime = document.getElementById("timer");
var countdown = (question.length * 5 + 1);
var questionArray = -1;
var questionNum = 0;

// Starts quiz and loads start and questions page
startButton.addEventListener("click", startQuiz);

function startQuiz() {
    document.getElementById("startPage").classList.add("d-none");
    document.getElementById("begTime").classList.add("d-none");
    document.getElementById("qaPage").classList.remove("d-none");

    startQuizTime();
    loadQuestions();
};

// Creates and sets a timer for the quiz
function startQuizTime() {
    
    var quizTimer = setInterval(function () {
        countdown--;
        quizTime.textContent = "Time: " + countdown;

// Timeout the quiz if done with questions/timer
        if (countdown === 0 || questionArray === questions.length) {
            clearInterval(quizTimer);
            setTimeout(finalScore, 1000);
        }
        
        finished();
    }, 1000);
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
        color: #27a7b3;">` + "Correct!" + `</div>`;

        setTimeout(stashResults,1000);
        getResults();   
    } 
    
// If the answer is incorrect, subtract 5 seconds from total time
    else {
        choice.innerHTML =`<hr>` + `<div style="font-style:italic; font-weight:bold; 
        color: #27a7b3;">` + "Sorry, that's incorrect." + `</div>`;
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
// to score page for their final score
function finished() {
    if (questionNum >= 3 || countdown <= 0) {
      document.getElementById("qaPage").classList.add("d-none");
      document.getElementById("finalPage").classList.remove("d-none");
      document.getElementById("quizTime").innerHTML = countdown + "seconds left";
      document.getElementById("finalScore").innerHTML = countdown;
  
      clearInterval(quizTime);
    }
  };
