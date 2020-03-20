//Code for the highScores.html page

// Grabs and creates variables for the startOver and clear buttons
var startOverButton = document.querySelector("button.startOverButton"),
    clearButton = document.querySelector("button.clearButton"),

// Grabs the list of scores and initials from local storage and turns them
// into an object to be used for the highScores page
newUserScoreList = JSON.parse(localStorage.getItem("userScoreList") || "[]"),
scoreOb = document.getElementById("userScoreOb");

// Takes in the scores and sorts them high to low
newUserScoreList.sort(function (a,b){
    return b.score - a.score
});

// A for loop that takes in the list of scores, determines what will be
// displayed, and appends the scores to the list section on the highScores page
for (var n = 0; n < newUserScoreList.length; n++) {
    var nextList= document.createElement("li")
    nextList.innerHTML = `<div style="font-weight:bold; color: #27a7b3;">` 
    + newUserScoreList[n].initials + " : " + newUserScoreList[n].score + `</div>`
    scoreOb.appendChild(nextList)
};

// Checking localStorage
// console.log(localStorage);

// Click functions for clearing localStorage and restarting the quiz
clearButton.addEventListener("click", function () {
    localStorage.clear();
    window.location.href = './highScores.html'
});
startOverButton.addEventListener("click", function () {
    history.back();
});