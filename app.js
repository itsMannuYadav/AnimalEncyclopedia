
const funFacts = [
  "The shortest living insect is the mayfly, which lives for only 24 hours.",
  "Insects make up about 80% of the world's species.",
  "Some crickets can tell you the temperature outside by how fast they chirp.",
  "A colony of termites can eat through 100 pounds of wood in a year.",
  "The average garden spider can spin seven different kinds of silk.",
  "Bees have to collect nectar from 2 million flowers to make 1 pound of honey.",
  "A butterfly's taste sensors are located in its feet.",
  "Some male moths can smell a female moth from up to 7 miles away.",
  "Houseflies hum in the key of F.",
  "Ants can lift 20 times their own body weight."
];

let currentFactIndex = 0;

function showNextFact() {
  const factDisplay = document.getElementById('fun-fact-display');
  factDisplay.textContent = funFacts[currentFactIndex];
  currentFactIndex = (currentFactIndex + 1) % funFacts.length;
}

setInterval(showNextFact, 15000);
showNextFact(); // Show the first fact immediately

const quizQuestions = [
  {
    question: "Which insect is known for its ability to produce light?",
    options: ["Butterfly", "Firefly", "Ant", "Beetle"],
    answer: "Firefly",
    hint: "This insect is often seen glowing at night."
  },
  {
    question: "How many legs do insects have?",
    options: ["Four", "Six", "Eight", "Ten"],
    answer: "Six",
    hint: "It's an even number between four and eight."
  },
  {
    question: "Which of these is NOT a stage in complete metamorphosis?",
    options: ["Egg", "Larva", "Nymph", "Pupa"],
    answer: "Nymph",
    hint: "This stage is associated with incomplete metamorphosis."
  },
  {
    question: "Which insect is known as the 'king of butterflies'?",
    options: ["Swallowtail", "Monarch", "Morpho", "Painted Lady"],
    answer: "Monarch",
    hint: "This butterfly is known for its orange and black coloration."
  }
];

let currentQuestion;
let timer;

function loadQuestion() {
  const questionElem = document.getElementById('quiz-question');
  const optionsElem = document.getElementById('quiz-options');
  const resultElem = document.getElementById('quiz-result');
  const timerElem = document.getElementById('quiz-timer');
  const hintElem = document.getElementById('quiz-hint');
  const nextButton = document.getElementById('next-question');
  const hintButton = document.getElementById('show-hint');
  
  clearInterval(timer);
  resultElem.textContent = '';
  optionsElem.innerHTML = '';
  hintElem.textContent = '';
  nextButton.style.display = 'none';
  hintButton.style.display = 'inline-block';
  
  currentQuestion = quizQuestions[Math.floor(Math.random() * quizQuestions.length)];
  
  questionElem.textContent = currentQuestion.question;
  
  currentQuestion.options.forEach(option => {
    const button = document.createElement('button');
    button.textContent = option;
    button.onclick = () => checkAnswer(option);
    optionsElem.appendChild(button);
  });

  let timeLeft = 30;
  timerElem.textContent = `Time remaining: ${timeLeft} seconds`;

  timer = setInterval(() => {
    timeLeft--;
    timerElem.textContent = `Time remaining: ${timeLeft} seconds`;
    if (timeLeft === 0) {
      clearInterval(timer);
      showAnswer();
    }
  }, 1000);
}

function checkAnswer(selected) {
  clearInterval(timer);
  const resultElem = document.getElementById('quiz-result');
  const nextButton = document.getElementById('next-question');
  const hintButton = document.getElementById('show-hint');
  if (selected === currentQuestion.answer) {
    resultElem.textContent = "Correct! Well done!";
    resultElem.style.color = "green";
  } else {
    resultElem.textContent = `Sorry, the correct answer was ${currentQuestion.answer}.`;
    resultElem.style.color = "red";
  }
  nextButton.style.display = 'inline-block';
  hintButton.style.display = 'none';
}

function showAnswer() {
  const resultElem = document.getElementById('quiz-result');
  const nextButton = document.getElementById('next-question');
  const hintButton = document.getElementById('show-hint');
  resultElem.textContent = `Time's up! The correct answer was ${currentQuestion.answer}.`;
  resultElem.style.color = "blue";
  nextButton.style.display = 'inline-block';
  hintButton.style.display = 'none';
}

function showHint() {
  const hintElem = document.getElementById('quiz-hint');
  hintElem.textContent = `Hint: ${currentQuestion.hint}`;
}

function playAudio(insect) {
  // In a real implementation, this would play an actual audio file
  console.log(`Playing ${insect} sound`);
  alert(`Imagine hearing the sound of a ${insect} right now!`);
}

// Initialize the quiz and fun fact carousel
loadQuestion();
showNextFact();
