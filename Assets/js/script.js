
//Create variables for buttons, questions, and choices
var startButton = document.getElementById("start");
var questionHead = document.getElementById("question");
var resultsList = document.getElementById("answers");

//add events for buttons, questions, and choices
startButton.addEventListener("click", function (event){
    document.getElementById("startPage").classList.add("d-none");
    document.getElementById("qaPage").classList.remove("d-none");

    questionHead.textContent = question [0].title;
    resultsList.innerHTML = "";

    var choices = question[0].choices;

for (var i = 0; i < choices.length; i++) {
    var nextChoice = document.createElement("div");
    nextChoice.textContent = choices[i];
    resultsList.appendChild(nextChoice);
}
});

function startQuiz() {
    c = 60;
    disappear001.innerHTML = "";
    // message001.innerHTML = question001[0];
    // message002.innerHTML = options001;
    // number001.innerHTML = a++;
}


