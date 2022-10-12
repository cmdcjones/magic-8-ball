const questionField = document.querySelector("#questionField");
questionField.focus();

const submitInput = document.querySelector("#submitInput");
submitInput.addEventListener("click", shakeTheBall);

function shakeTheBall() {
    const resultText = document.querySelector("#resultText p");
    resultText.textContent = "Ball has been shaken";
    questionField.value = "";
}
