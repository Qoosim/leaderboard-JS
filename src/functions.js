const scores = [];

const addScore = (name, score) => {
  scores.push({ name, score });
  return { name, score };
};

const createScore = ({ name, score }) => {
  const h4 = document.createElement('h4');
  h4.classList.add('custom-row', 'p-1');
  h4.textContent = `${name}: ${score}`;
  document.querySelector('.display').appendChild(h4);
};

const getDisplay = () => {
  scores.forEach(createScore);
};

const resetInput = () => {
  document.querySelector('.name').value = '';
  document.querySelector('.score').value = '';
  document.querySelector('.name').focus();
};

export {
  addScore, createScore, resetInput, getDisplay,
};
