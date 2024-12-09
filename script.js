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
    { fact: "This mammal can hold its breath for up to 40 minutes underwater.", options: ["Beaver", "Sloth"], correct: "Sloth" },
    { fact: "This bird is the fastest animal on Earth, reaching speeds over 240 mph during a dive.", options: ["Peregrine Falcon", "Golden Eagle"], correct: "Peregrine Falcon" },
    { fact: "This animal’s heart is located in its head.", options: ["Shrimp", "Squid"], correct: "Shrimp" },
    { fact: "A group of crows is called a ___.", options: ["Murder", "Flock"], correct: "Murder" },
    { fact: "This animal can regrow its heart and brain.", options: ["Axolotl", "Starfish"], correct: "Axolotl" },
    { fact: "This bird sleeps while flying.", options: ["Albatross", "Eagle"], correct: "Albatross" },
    { fact: "This animal produces blue blood.", options: ["Horseshoe Crab", "Octopus"], correct: "Horseshoe Crab" },
    { fact: "This animal can survive in the vacuum of space.", options: ["Tardigrade", "Earthworm"], correct: "Tardigrade" },
    { fact: "This mammal lays eggs.", options: ["Platypus", "Hedgehog"], correct: "Platypus" },
    { fact: "This animal has three hearts.", options: ["Octopus", "Squid"], correct: "Octopus" }
];

const geographyFacts = [
    { fact: "This is the only country in the world without an official capital city.", options: ["Switzerland", "Nauru"], correct: "Nauru" },
    { fact: "This desert is the largest hot desert in the world.", options: ["Sahara", "Arabian Desert"], correct: "Sahara" },
    { fact: "This river is the longest in the world.", options: ["Nile", "Amazon"], correct: "Nile" },
    { fact: "This country has the most islands in the world.", options: ["Sweden", "Indonesia"], correct: "Sweden" },
    { fact: "This city has more canals than Venice.", options: ["Amsterdam", "Stockholm"], correct: "Amsterdam" },
    { fact: "This country is home to the world’s driest desert.", options: ["Chile", "Egypt"], correct: "Chile" },
    { fact: "This is the world’s largest island.", options: ["Greenland", "Australia"], correct: "Greenland" },
    { fact: "This country has no rivers.", options: ["Saudi Arabia", "Oman"], correct: "Saudi Arabia" },
    { fact: "This country is the flattest in the world.", options: ["Maldives", "Qatar"], correct: "Maldives" },
    { fact: "This mountain range is the longest in the world.", options: ["Andes", "Rockies"], correct: "Andes" }
];

const historyFacts = [
    { fact: "This city was built entirely on a lake.", options: ["Venice", "Tenochtitlán"], correct: "Tenochtitlán" },
    { fact: "This was the first country to grant women the right to vote.", options: ["New Zealand", "Finland"], correct: "New Zealand" },
    { fact: "This ancient structure is the largest in the world by volume.", options: ["Great Pyramid of Giza", "Great Pyramid of Cholula"], correct: "Great Pyramid of Cholula" },
    { fact: "This empire was the largest in history by land area.", options: ["Mongol Empire", "British Empire"], correct: "British Empire" },
    { fact: "This country was the first to use paper currency.", options: ["China", "Greece"], correct: "China" },
    { fact: "This civilization invented the first known system of writing.", options: ["Sumerians", "Egyptians"], correct: "Sumerians" },
    { fact: "This year marked the end of World War II.", options: ["1945", "1946"], correct: "1945" },
    { fact: "This was the first city to reach 1 million residents.", options: ["Rome", "Alexandria"], correct: "Rome" },
    { fact: "This country built the first known pyramid.", options: ["Egypt", "Sudan"], correct: "Sudan" },
    { fact: "This person is credited with inventing the printing press.", options: ["Johannes Gutenberg", "Isaac Newton"], correct: "Johannes Gutenberg" }
];

const scienceFacts = [
    { fact: "This is the only metal that’s liquid at room temperature.", options: ["Mercury", "Gallium"], correct: "Mercury" },
    { fact: "This planet has the highest mountain in the solar system.", options: ["Mars", "Venus"], correct: "Mars" },
    { fact: "This gas makes up most of Earth’s atmosphere.", options: ["Nitrogen", "Oxygen"], correct: "Nitrogen" },
    { fact: "This is the rarest naturally occurring element on Earth.", options: ["Astatine", "Francium"], correct: "Astatine" },
    { fact: "This planet has the shortest day in the solar system.", options: ["Jupiter", "Saturn"], correct: "Jupiter" },
    { fact: "This type of rock forms from cooled lava or magma.", options: ["Igneous", "Sedimentary"], correct: "Igneous" },
    { fact: "This is the most abundant element in the universe.", options: ["Hydrogen", "Helium"], correct: "Hydrogen" },
    { fact: "This scientist developed the theory of general relativity.", options: ["Albert Einstein", "Isaac Newton"], correct: "Albert Einstein" },
    { fact: "This layer of the Earth is mostly liquid.", options: ["Outer Core", "Mantle"], correct: "Outer Core" },
    { fact: "This animal was the first to be cloned successfully.", options: ["Sheep", "Frog"], correct: "Sheep" }
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
        button.classList.add("option-button");
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
