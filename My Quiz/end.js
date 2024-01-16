const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highscores = JSON.parse(localStorage.getItem("highscores")) || [];
finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
   saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
    console.log("clicked the save button");
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };
    highscores.push(score);   
    highscores.sort( (a,b) => b.score - a.score);
    highscores.splice(5);

    localStorage.setItem("highscores", JSON.stringify(highscores));
    window.location.assign("/My%20Quiz");

    console.log(highscores);
}

