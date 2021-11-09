import './style.css';
import {
  addScore, createScore, resetInput, getDisplay,
} from './functions';

const submit = document.querySelector('.subBtn');
const name = document.querySelector('.name');
const score = document.querySelector('.score');

submit.addEventListener('click', (e) => {
  e.preventDefault();

  const newScore = addScore(
    name.value,
    score.value,
  );

  createScore(newScore);
  resetInput();
});

getDisplay();
