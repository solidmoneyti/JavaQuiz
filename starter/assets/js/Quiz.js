const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choices"));
// const questioncountertext = document.getElementById("questionCounter");
// const scoreText = document.getElementById("score");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questioncounter = 0;
let availablequestions = [];

// Questions go here
let questions = [
 {
    question: "Commonly used data types DO NOT include:",
    choice1: "1. strings",
    choice2: "2. boolean",
    choice3: "3. alerts",
    choice4: "4. numbers",
    answer: 3
  },
  {
    question: "The condition in an if/else statement is enclosed within _______________",
    choice1: "1. quotes",
    choice2: "2. curly brackets",
    choice3: "3. square brackets",
    choice4: "4. parantheses",
    answer: 4
  },
  {
    question: "Arrays in JavaScript can be used to store _______________",
    choice1: "1. numbers and strings",
    choice2: "2. other arrays",
    choice3: "3. booleans",
    choice4: "4. all of the above",
    answer: 4
  },
  {
    question: "String values must be enclosed within ________ when being assigned to variables",
    choice1: "1. commas",
    choice2: "2. curly brackets",
    choice3: "3. quotes",
    choice4: "4. parantheses",
    answer: 3
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choice1: "1. Console log",
    choice2: "2. Terminal / bash",
    choice3: "3. Javascript",
    choice4: "4. For loops",
    answer: 1
  },
]

// Constants
const CORRECT_BONUS = 20;
const MAX_QUESTIONS = 5;

function startGame () {
    questioncounter = 0;
    score = 0;
    availablequestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if(availablequestions.length === 0 || questioncounter >= MAX_QUESTIONS){
        localStorage.setItem("mostRecentScore", score);
        //go to end page
        return window.location.assign("/starter/highscores.html");
    }
    questioncounter++;
    // questioncountertext.innerText = questioncounter + "/" + MAX_QUESTIONS;
    const questionindex = Math.floor(Math.random() * availablequestions.length);
    currentQuestion = availablequestions[questionindex];
    question.innerText = currentQuestion.question;

    choices.forEach(choices =>{
        const number = choices.dataset['number'];
        choices.innerText = currentQuestion['choices' + number];
    })

    availablequestions.splice(questionindex, 1);

    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
      if(!acceptingAnswers) return;

      acceptingAnswers = false;
      const selectedChoice = e.target;
      const selectedAnswer = selectedChoice.dataset['number'];
    //   const classtoapply = "incorrect";
    //   if (selectedAnswer == currentQuestion.answer) {
    //         classtoapply = "correct";
    //   }

        const classtoapply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
        if(classtoapply === "correct") {
            incrementScore(CORRECT_BONUS);
        }

      selectedChoice.parentElement.classList.add(classtoapply);

      setTimeout( () => {
        selectedChoice.parentElement.classList.remove(classtoapply);
        getNewQuestion();
      }, 1000);

    })
})

incrementScore = num => {
    score += num;
    // scoreText.innerText = score;
}
