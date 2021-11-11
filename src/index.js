import './style.css';
import {
  createGame, getPosts, resetInput,
} from './functions';

const submit = document.querySelector('.subBtn');
const refBtn = document.querySelector('.refBtn');

submit.addEventListener('click', (e) => {
  e.preventDefault();
  createGame();
  resetInput();
});

refBtn.addEventListener('click', () => {
  getPosts();
});
