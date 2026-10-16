
const question = document.querySelector("#question");
const answers = document.querySelector("#answer-buttons");
const nextButton = document.querySelector("#nextBtn");
const score = document.querySelector("#score");
const msg = document.querySelector("#msg");

const questions = [
    {
        question: "Which language runs in a web browser?",
        answers: [
            { text: "C", correct: false },
            { text: "Java", correct: false },
            { text: "JavaScript", correct: true },
            { text: "Python", correct: false }
        ]
    },
    {
        question: "Which HTML tag is used for a hyperlink?",
        answers: [
            { text: "<link>", correct: false },
            { text: "<a>", correct: true },
            { text: "<p>", correct: false },
            { text: "<img>", correct: false }
        ]
    },
    {
        question: "Which CSS property changes text color?",
        answers: [
            { text: "font-size", correct: false },
            { text: "background", correct: false },
            { text: "color", correct: true },
            { text: "margin", correct: false }
        ]
    },
    {
        question: "Which keyword declares a variable in JavaScript?",
        answers: [
            { text: "int", correct: false },
            { text: "let", correct: true },
            { text: "float", correct: false },
            { text: "char", correct: false }
        ]
    },
    {
        question: "Which symbol is used for single-line comments?",
        answers: [
            { text: "<!-- -->", correct: false },
            { text: "**", correct: false },
            { text: "//", correct: true },
            { text: "##", correct: false }
        ]
    },
    {
        question: "Which method adds an element to the end of an array?",
        answers: [
            { text: "push()", correct: true },
            { text: "pop()", correct: false },
            { text: "shift()", correct: false },
            { text: "join()", correct: false }
        ]
    },
    {
        question: "Which operator checks strict equality?",
        answers: [
            { text: "=", correct: false },
            { text: "==", correct: false },
            { text: "===", correct: true },
            { text: "!=", correct: false }
        ]
    },
    {
        question: "Which method converts a string to uppercase?",
        answers: [
            { text: "toLowerCase()", correct: false },
            { text: "toUpperCase()", correct: true },
            { text: "uppercase()", correct: false },
            { text: "convert()", correct: false }
        ]
    },
    {
        question: "Which HTML tag displays an image?",
        answers: [
            { text: "<image>", correct: false },
            { text: "<picture>", correct: false },
            { text: "<img>", correct: true },
            { text: "<src>", correct: false }
        ]
    },
    {
        question: "Which CSS property changes background color?",
        answers: [
            { text: "color", correct: false },
            { text: "background-color", correct: true },
            { text: "font-color", correct: false },
            { text: "text-color", correct: false }
        ]
    },
    {
        question: "Which method removes the last array element?",
        answers: [
            { text: "push()", correct: false },
            { text: "shift()", correct: false },
            { text: "pop()", correct: true },
            { text: "unshift()", correct: false }
        ]
    },
    {
        question: "Which keyword declares a constant?",
        answers: [
            { text: "var", correct: false },
            { text: "let", correct: false },
            { text: "const", correct: true },
            { text: "static", correct: false }
        ]
    },
    {
        question: "Which method selects an element using its ID?",
        answers: [
            { text: "document.getElementById()", correct: true },
            { text: "document.createElement()", correct: false },
            { text: "document.write()", correct: false },
            { text: "document.append()", correct: false }
        ]
    },
    {
        question: "Which event occurs when a user clicks a button?",
        answers: [
            { text: "change", correct: false },
            { text: "mouseover", correct: false },
            { text: "click", correct: true },
            { text: "submit", correct: false }
        ]
    },
    {
        question: "What does array.length return?",
        answers: [
            { text: "Last array element", correct: false },
            { text: "Number of elements", correct: true },
            { text: "Array index", correct: false },
            { text: "Array values", correct: false }
        ]
    },
    {
        question: "Which method executes a function for each array element?",
        answers: [
            { text: "forEach()", correct: true },
            { text: "repeat()", correct: false },
            { text: "until()", correct: false },
            { text: "foreachloop()", correct: false }
        ]
    },
    {
        question: "Which operator represents logical AND?",
        answers: [
            { text: "||", correct: false },
            { text: "&&", correct: true },
            { text: "!", correct: false },
            { text: "&=", correct: false }
        ]
    },
    {
        question: "Which method creates a new HTML element?",
        answers: [
            { text: "document.querySelector()", correct: false },
            { text: "document.createElement()", correct: true },
            { text: "document.getElementById()", correct: false },
            { text: "document.remove()", correct: false }
        ]
    },
    {
        question: "What does innerText do?",
        answers: [
            { text: "Changes CSS styles only", correct: false },
            { text: "Gets or sets an element's text", correct: true },
            { text: "Deletes an element", correct: false },
            { text: "Creates an array", correct: false }
        ]
    },
    {
        question: "Which statement is used to make a decision?",
        answers: [
            { text: "if...else", correct: true },
            { text: "console.log()", correct: false },
            { text: "push()", correct: false },
            { text: "addEventListener()", correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let scoreCount = 0;

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];

    question.innerText = currentQuestion.question;
    answers.innerHTML = "";
    nextButton.disabled = true;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");

        button.innerText = answer.text;
        button.classList.add("btn");

        button.addEventListener("click", () => {
            const allOptions = answers.querySelectorAll("button");

            allOptions.forEach(option => {
                option.disabled = true;
            });

            if (answer.correct) {
                scoreCount += 1;
                button.style.backgroundColor = "green";
            } else {
                button.style.backgroundColor = "red";
            }

            nextButton.disabled = false;
        });

        answers.appendChild(button);
    });
}

showQuestion();

nextButton.addEventListener("click", () => {
    currentQuestionIndex += 1;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
       question.innerText = "Quiz Completed! 🎉";
        question.classList.add("completed-title");  
        answers.innerHTML = "";
        nextButton.disabled = true;
        nextButton.style.display = "none";

        score.innerText =
            `Your Score: ${scoreCount} / ${questions.length}`;

        if (scoreCount >= 18) {
            msg.innerText = "Excellent! 🔥 You're a JavaScript Pro!";
        } else if (scoreCount >= 15) {
            msg.innerText = "Great Job! 🎉 Keep it up!";
        } else if (scoreCount >= 10) {
            msg.innerText = "Good Work! 👍 Keep Practicing!";
        } else {
            msg.innerText = "Nice Try! 💪 Practice makes you better!";
        }
    }
});