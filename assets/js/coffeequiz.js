//credit for : https://youtu.be/49pYIMygIcU

// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");


// create our questions
let questions = [{
        question: "The meaning of the term “espresso” is…",
        imgSrc: "assets/images/questions/espresso.png",
        choiceA: "Forced out",
        choiceB: "Expressive",
        choiceC: "Under pressure",
        correct: "A"
    }, {
        question: "Adding milk to coffee…?",
        imgSrc: "assets/images/coffeequiz/latte.png",
        choiceA: "Slows the digestive processes",
        choiceB: "Mitigates the effect of caffeine ",
        choiceC: "Both",
        correct: "C"
    }, {
        question: "Dark roasted coffee beans have…?",
        imgSrc: "assets/images/coffeequiz/americano.png",
        choiceA: "Richer flavor",
        choiceB: "Less caffeine",
        choiceC: "Both",
        correct: "C"
    },
    {
        question: "Which ingredient is NOT found in a cappuccino??",
        imgSrc: "assets/images/coffeequiz/cappuccino.png",
        choiceA: "Steamed milk",
        choiceB: "Espresso",
        choiceC: "Whipped cream",
        correct: "C"
    },

];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion() {
    let q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";
    qImg.innerHTML = "<img src=" + q.imgSrc + ">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click", startQuiz);

// start quiz
function startQuiz() {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s
}

// render progress
function renderProgress() {
    for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
        progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
    }
}

// counter render

function renderCounter() {
    if (count <= questionTime) {
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    } else {
        count = 0;
        // change progress color to orange
        answerIsWrong();
        if (runningQuestion < lastQuestion) {
            runningQuestion++;
            renderQuestion();
        } else {
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer) {
    if (answer == questions[runningQuestion].correct) {
        // answer is correct
        score++;
        // change progress color to light green
        answerIsCorrect();
    } else {
        // answer is wrong
        // change progress color to orange
        answerIsWrong();
    }
    count = 0;
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    } else {
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect() {
    document.getElementById(runningQuestion).style.backgroundColor = "#d2eb77";
}

// answer is Wrong
function answerIsWrong() {
    document.getElementById(runningQuestion).style.backgroundColor = "#ff7551";
}

// score render
function scoreRender() {
    scoreDiv.style.display = "block";

    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score / questions.length);

    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "assets/images/coffeequiz/coffeeface-5.jpg" :
        (scorePerCent >= 60) ? "assets/images/coffeequiz/coffeeface-4.jpg" :
        (scorePerCent >= 40) ? "assets/images/coffeequiz/coffeeface-3.jpg" :
        (scorePerCent >= 20) ? "assets/images/coffeequiz/coffeeface-2.jpg" :
        "assets/images/coffeequiz/coffeeface-1.jpg";

    let message = (scorePerCent >= 80) ? "Well done!! Great job!" :
        (scorePerCent >= 60) ? "Almost perfect!! keep it up!" :
        (scorePerCent >= 40) ? "You did alright!" :
        (scorePerCent >= 20) ? "Maybe you should try a little harder." :
        "Not great, try one more time!!";

    scoreDiv.innerHTML = "<img src=" + img + ">";
    scoreDiv.innerHTML += "<h4>" + scorePerCent + "%</h4>";
    scoreDiv.innerHTML += "<p>" + message + "</p>" + "<p>"

}