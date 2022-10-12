const questionField = document.querySelector("#questionField");
questionField.focus();

const submitInput = document.querySelector("#submitInput");
submitInput.addEventListener("click", shakeTheBall);

const answers = [
    "Yes",
    "Certainly",
    "Affirmative",
    "No",
    "Nope",
    "Negative",
    "Maybe",
    "Perhaps",
    "Very likely",
    "Unlikely",
    "Try asking again",
    "Ask some other time",
];

function shakeTheBall() {
    const resultText = document.querySelector("#resultText p");
    resultText.textContent = "Ball has been shaken";
    questionField.value = "";
}
