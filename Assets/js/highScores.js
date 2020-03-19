var restartButton = document.querySelector("button.restartButton"),
    clearButton = document.querySelector("button.clearButton"),


newUserScoreList = JSON.parse(localStorage.getItem("userScoreList") || "[]"),
scoreOb = document.getElementById("userScoreOb");


newUserScoreList.sort(function (a,b){
    return b.score - a.score
});


for (var n = 0; n < newUserScoreList.length; n++) {
    var nextList= document.createElement("li")
    nextList.textContent = newUserScoreList[n].initials + " - " + newUserScoreList[n].score
    scoreOb.appendChild(nextList)
};

console.log(localStorage);


clearButton.addEventListener("click", function () {
    localStorage.clear();
    history.back()
});
restartButton.addEventListener("click", function () {
    history.back();
});