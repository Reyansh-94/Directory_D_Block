const Questions = [
  {
   question: "Which is the largest animal in the world?",
   answers: [
      {text:"Sharak", correct: false},
      {text:"Blue Whale", correct: true},
      {text:"Elephent", correct: false},
      {text:"Giraffe", correct: false}
    ]
  },
  {
  question: "Which is the smallest country in the world?",
   answers: [
      {text:"vatican City", correct: true},
      {text:"Bhutan", correct: false},
      {text:"Bhutan", correct: false},
      {text:"Shri lanka", correct: false}
    ]
  },
  {
    question: "Which is the largest desert in the world?",
   answers: [
      {text:"Kalahari", correct: false},
      {text:"Gobi", correct: false},
      {text:"Shahara", correct: false},
      {text:"Antartica", correct: true}
    ]
  },
  {
    question: "Which is the smallest continent in the world?",
   answers: [
      {text:"Asia", correct: false},
      {text:"Australiya", correct: true},
      {text:"Arctic", correct: false},
      {text:"Africa", correct: false}
    ]
  },
  {
    question: "Which is the Most Development Country in the world?",
   answers: [
      {text:"Switzerland", correct: true},
      {text:"Japan", correct: false},
      {text:"United States", correct: false},
      {text:"Canada", correct: false}
    ]
  }
]

const questionElement = document.getElementById("question");
const ansBtn = document.getElementById("answers-button");
const  nxtBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nxtBtn.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = Questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo+". " + currentQuestion.question;

currentQuestion.answers.forEach(element => {
  const button = document.createElement("button");
  button.innerHTML = element.text;
  button.classList.add("btn");
  ansBtn.appendChild(button);
  if(element.correct) {
       button.dataset.correct = element.correct;
  }
  button.addEventListener("click", selectAns);
});
};
function resetState() {
  nxtBtn.style.display = "none";
  while(ansBtn.firstChild) {
    ansBtn.removeChild(ansBtn.firstChild);
  }
}

function selectAns(e) {
  const selectBtn = e.target;
  const isCorrect = selectBtn.dataset.correct === "true";
  if(isCorrect) {
    selectBtn.classList.add("Correct");
    score++;
  }else {
    selectBtn.classList.add("Incorrect");
  }
  Array.from(ansBtn.children).forEach(button => {
        if (button.dataset.correct === "true") {
          button.classList.add(".Correct");
        }
          button.disabled = true;      
  });
  nxtBtn.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `Your scored ${score} out of ${Questions.length}`;
  nxtBtn.innerHTML = "Play Again";
  nxtBtn.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if(currentQuestionIndex < Questions.length) {
    showQuestion();
  }else {
    showScore();
  }
}

nxtBtn.addEventListener("click", () => {
  if(currentQuestionIndex < Questions.length) {
    handleNextButton();
  }else {
    startQuiz();
  }
})

startQuiz();