const gameScreen = document.getElementById("game-screen");
const homeScreen = document.getElementById("home-screen");
const scoreScreen = document.getElementById("score-screen");
const startBtn = document.getElementById("start-button");
const factEl = document.getElementById("fact");
const optionEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("next-button");
const finalScoreEl = document.getElementById("final-score");

const animalFacts = [
    {
        fact: "This mammal can hold its breath for up to 40 minutes underwater.",
        options: ["Beaver", "Sloth"],
        correct: "Sloth"
    },
    {
        fact: "This bird is the fastest animal on Earth, reaching speeds over 240 mph during a dive.",
        options: ["Peregrine Falcon", "Golden Eagle"],
        correct: "Peregrine Falcon"
    },
    {
        fact: "This animal’s heart is located in its head.",
        options: ["Shrimp", "Squid"],
        correct: "Shrimp"
    }
];

const geographyFacts = [
    {
        fact: "This is the only country in the world without an official capital city.",
        options: ["Switzerland", "Nauru"],
        correct: "Nauru"
    },
    {
        fact: "This desert is the largest hot desert in the world.",
        options: ["Sahara", "Arabian Desert"],
        correct: "Sahara"
    },
    {
        fact: "This river is the longest in the world.",
        options: ["Nile", "Amazon"],
        correct: "Nile"
    }
];

const historyFacts = [
    {
        fact: "This city was built entirely on a lake.",
        options: ["Venice", "Tenochtitlán"],
        correct: "Tenochtitlán"
    },
    {
        fact: "This was the first country to grant women the right to vote.",
        options: ["New Zealand", "Finland"],
        correct: "New Zealand"
    },
    {
        fact: "This ancient structure is the largest in the world by volume.",
        options: ["Great Pyramid of Giza", "Great Pyramid of Cholula"],
        correct: "Great Pyramid of Cholula"
    }
];

const scienceFacts = [
    {
        fact: "This is the only metal that’s liquid at room temperature.",
        options: ["Mercury", "Gallium"],
        correct: "Mercury"
    },
    {
        fact: "This planet has the highest mountain in the solar system.",
        options: ["Mars", "Venus"],
        correct: "Mars"
    },
    {
        fact: "This gas makes up most of Earth’s atmosphere.",
        options: ["Nitrogen", "Oxygen"],
        correct: "Nitrogen"
    }
];

document.getElementById("geography-mode").addEventListener("click", ()=>{
    startQuiz(geographyFacts);
});

document.getElementById("animal-mode").addEventListener("click", ()=>{
    startQuiz(animalFacts);
});

document.getElementById("history-mode").addEventListener("click", ()=>{
    startQuiz(historyFacts);
});

document.getElementById("science-mode").addEventListener("click", ()=>{
    startQuiz(scienceFacts);
});

let Score = 0;
let currentQuestionIndex = 0;
let currentModeFacts = [];

function startQuiz(facts) {
    homeScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");
    currentModeFacts = facts;
    score = 0;
    currentQuestionIndex = 0;
    loadQuestion();
}

function loadQuestion() {
    feedbackEl.textContent = "";
    nextBtn.classList.add("hidden");

    const currentQuestion = currentModeFacts[currentQuestionIndex];
    factEl.textContent = currentQuestion.fact;

    optionEl.innerHTML = "";
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(option));
        optionEl.appendChild(button);
    });
}

function checkAnswer(selected) {
    const currentQuestion = currentModeFacts[currentQuestionIndex];
    if (selected === currentQuestion.correct){
        feedbackEl.textContent = "Correct!";
        feedbackEl.style.color = "green";
        score++
    } else {
        feedbackEl.textContent = "Wrong!"
        feedbackEl.style.color = "red";
    }
    nextBtn.classList.remove("hidden");
}

nextBtn.addEventListener('click', ()=>{
    currentQuestionIndex++;
    if (currentQuestionIndex < currentModeFacts.length) {
        loadQuestion();
    } else {
        gameScreen.classList.add("hidden");
        scoreScreen.classList.remove("hidden");
        finalScoreEl.textContent = `you score ${score} out of ${currentModeFacts.length}`;
        score = 0;
    }
});

document.getElementById("home-btn").addEventListener('click', ()=>{
    gameScreen.classList.add('hidden');
    homeScreen.classList.remove('hidden');
});

document.getElementById("home-button").addEventListener('click', ()=>{
    scoreScreen.classList.add('hidden');
    homeScreen.classList.remove('hidden');
});
