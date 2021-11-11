const createGame = async () => {
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/101/scores', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      user: document.querySelector('.name').value,
      score: document.querySelector('.score').value,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data)) // eslint-disable-line no-console
    .catch((error) => `Error: ${error}`);
};

const resetInput = () => {
  document.querySelector('.name').value = '';
  document.querySelector('.score').value = '';
  document.querySelector('.name').focus();
};

const getPosts = async () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/101/scores';
  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.result.forEach((post) => {
        const h4 = document.createElement('h4');
        h4.classList.add('custom-row', 'p-1');
        h4.textContent = `${post.user}: ${post.score}`;
        document.querySelector('.display').appendChild(h4);
      });
    })
    .catch((error) => `Error ${error}`);
};

export {
  createGame, getPosts, resetInput,
};
