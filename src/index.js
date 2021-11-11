import './style.css';
import {
  createGame, createScores, getPosts, resetInput,
} from './functions';

const submit = document.querySelector('.subBtn');
const refBtn = document.querySelector('.refBtn');

submit.addEventListener('click', (e) => {
  e.preventDefault();
  createScores();
  resetInput();
});

refBtn.addEventListener('click', () => {
  getPosts();
});

if (localStorage.getItem('data')) {
  localStorage.getItem('data');
} else {
  createGame();
}
