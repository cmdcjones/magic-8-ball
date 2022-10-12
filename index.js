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

function sleep(ms) {
    return new Promise(
        resolve => setTimeout(resolve, ms)
    );
}

async function shakeTheBall() {
    const resultText = document.querySelector("#resultText p");
    let i = 0;
    while (i < 12) {
        const randomSelect = Math.floor(Math.random() * answers.length);
        resultText.textContent = answers[randomSelect];
        i++;
        await sleep(250);
    }
    submitInput.value = "Shake again!";
    questionField.value = "";
}
