import './style.css';
import {
  createGame, createUser, getPosts, resetInput,
} from './functions';

const submit = document.querySelector('.subBtn');
const refBtn = document.querySelector('.refBtn');

submit.addEventListener('click', (e) => {
  e.preventDefault();
  createUser();
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
