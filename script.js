
function results() {
  const answerOne = document.getElementById("bag").value;
  const answerTwo = document.getElementById("stone").value;
  const answerThree = document.getElementById("bridge").value;
  let userOne = document.querySelector('input[name="question-1"]:checked').value;
  let userTwo = document.querySelector('input[name="question-2"]:checked').value;
  let userThree = document.querySelector('input[name="question-3"]:checked').value;
  const resultsOne = document.getElementById("resultsOne");
  const resultsTwo = document.getElementById("resultsTwo");
  const resultsThree = document.getElementById("resultsThree");

  if (userOne === answerOne) {
    resultsOne.innerText = `Correct!`;
    resultsOne.style.color = "green";
  } else {
    resultsOne.innerText = `Incorrect. The answer was \"${answerOne}.\"`
    resultsOne.style.color = "red";
  }
  if (userTwo === answerTwo) {
    resultsTwo.innerText = `Correct!`;
    resultsTwo.style.color = "green";
  } else {
    resultsTwo.innerText = `Incorrect. The answer was \"${answerTwo}.\"`
    resultsTwo.style.color = "red";
  }
  if (userThree === answerThree) {
    resultsThree.innerText = `Correct!`;
    resultsThree.style.color = "green";
  } else {
    resultsThree.innerText = `Incorrect. The answer was \"${answerThree}.\"`
    resultsThree.style.color = "red";
  }
}
