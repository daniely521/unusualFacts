const gameScreen = document.getElementById("game-screen");
const homeScreen = document.getElementById("home-screen");
const scoreScreen = document.getElementById("score-screen");
const startBtn = document.getElementById("start-button");
const factEl = document.getElementById("fact");
const optionEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("next-button");
const finalScoreEl = document.getElementById("final-score");

document.getElementById("start-button").addEventListener("click", () => {
    homeScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden")
    loadQuestions()
});

document.getElementById("next-button").addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestions();
    } else {
        gameScreen.classList.add("hidden");
        scoreScreen.classList.remove("hidden");
        finalScoreEl.textContent = `Your final score was ${Score} out of  ${questions.length}!`;
    }
});

document.getElementById("replay-button").addEventListener("click", () => {
    score = 0;
    currentQuestionIndex = 0;
    scoreScreen.classList.add("hidden");
    homeScreen.classList.remove("hidden");
});

let Score = 0;
let currentQuestionIndex = 0;

function loadQuestions() {
    feedbackEl.textContent = "";
    nextBtn.classList.add("hidden");

    const currentQuestion = questions[currentQuestionIndex];
    factEl.textContent = currentQuestion.fact;

    optionEl.innerHTML = '';
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add("option-button");
        button.addEventListener("click", ()=> checkAnswer(option));
        optionEl.appendChild(button);
    });
}