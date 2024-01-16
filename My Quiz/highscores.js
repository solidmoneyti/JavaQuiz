const highscoreList = document.getElementById("highscoreList");
const highscores = JSON.parse(localStorage.getItem("highscores")) || [];

highscoreList.innerHTML = highscores.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
})
    .join("");
