/* Elements assigned to variables from the DOM class and id */
let question = document.querySelector('#question');
let choices = Array.from(document.querySelectorAll('choice.text'));
let progressText = document.querySelector('#progressText');
let scoreText = document.querySelector('#score');
let progressBarFull = document.querySelector('#progressBarFull');

/* Variables that will be inserted to the functions */
let score = 0;
let theAnswers = true;
let upcomingQuestions = [];
let currentQuestion = {};
let questionCounter = 0;

/* Game questions with 4 total choices */
let questions = [
    {
        question: 'What year did the Raiders when their last Super Bowl?',
        choice1: '2002', 
        choice2: '1993',
        choice3: '1983',
        choice4: '1972',
    },
    {
        question: "What was Jack Tatum's nickname?",
        choice1: 'Killer Croc',
        choice2: 'The Assassin',
        choice3: 'The Jackhammer',
        choice4: 'Killer Bee',
    },
    {
        question: "Which 'Hall of Fame' Raider wore the number 00",
        choice1: 'Charles Woodson', 
        choice2: 'Kenny Stabler',
        choice3: 'Mike Haynes',
        choice4: 'Jim Otto',
    },
    {
        question: 'Which Raider became a HollyWood star?',
        choice1: 'Carl Weathers', 
        choice2: 'Howie Long',
        choice3: 'Lyle Alzado',
        choice4: 'Bo Jackson',
    },
    {
        question: 'Who is Al Davis?',
        choice1: 'Ex owner', 
        choice2: 'Current owner',
        choice3: "QB from the late 70's",
        choice4: 'Current star Wide Receiver',
    }
];

const gamePoints = 500;
const totalQuestions = 5;

function startGame() {
    questionCounter = 0;
    score = 0;
    upcomingQuestions = [...questions];
    getNewQuestion();
};

function getNewQuestion() {
    if (upcomingQuestions.length === 0 || questionCounter > totalQuestions)
    localStorage.setItem('mostRecentScore', score)
    return window.location.assign('/end.html')
    
};

questionCounter++ 
progressText.innerText = `Question${questionCounter} of ${totalQuestions}`
progressBarFull.style.width = `${(questionCounter/totalQuestions) * 100}%`

const questionIndex = Math.floor(Math.random() * upcomingQuestions.length);
currentQuestion = upcomingQuestions[questionsIndex];
question.innerText = currentQuestion.question;