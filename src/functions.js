const createGame = async () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      name: 'AyoGame',
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      const myData = data.result.split(' ')[3];
      localStorage.setItem('data', JSON.stringify(myData));
    })
    .catch((error) => `Error: ${error}`);
};

const createScores = async () => {
  const id = JSON.parse(localStorage.getItem('data'));
  await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`, {
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
    .then((data) => data)
    .catch((error) => `Error: ${error}`);
};

const resetInput = () => {
  document.querySelector('.name').value = '';
  document.querySelector('.score').value = '';
  document.querySelector('.name').focus();
};

const getPosts = async () => {
  const id = JSON.parse(localStorage.getItem('data'));
  const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`;
  const data = await fetch(url).then((response) => response.json()).catch((error) => `Error: ${error}`);
  document.querySelector('.display').innerHTML = '';
  const div = document.createElement('div');
  div.classList.add('border', 'border-1', 'border-dark', 'rounded');
  data.result.forEach((post) => {
    const h4 = document.createElement('h4');
    h4.classList.add('custom-row', 'p-1');
    h4.textContent = `${post.user}: ${post.score}`;
    div.appendChild(h4);
    document.querySelector('.display').appendChild(div);
  });
};

export {
  createGame, createScores, getPosts, resetInput,
};
