import { sum } from "./sum";

const showSumBtn = document.getElementById('showSumBtn'); 

showSumBtn.addEventListener('click', () => {
  const resultant = sum(4, 5);
  const ressultDiv = document.getElementById('result');
  ressultDiv.innerHTML = "Result: " + resultant;

});