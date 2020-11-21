import axios from 'axios';

const baseApiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const shooterGamApiKey = 'KJOL8sVVdDaV9mb3w7Xx';

export const savePlayerScore = async (playerName, score) => {
  await axios.post(`${baseApiUrl}games/${shooterGamApiKey}/scores/`, { user: playerName, score })
    .then(result => result.data)
    .catch(err => err.response.data);
};

export const sortAndSaveScores = (responseArr) => {
  const sortable = [];
  const { result } = responseArr.data;

  for (let i = 0; i < result.length; i += 1) {
    sortable.push([result[i].user, result[i].score]);
  }

  sortable.sort((a, b) => b[1] - a[1]);
  const firstTen = [];
  for (let i = 0; i < 10; i += 1) {
    firstTen.push(sortable[i]);
  }
  localStorage.setItem('savedScores', JSON.stringify(firstTen));
  return firstTen;
};

export const retrievePlayerScore = async () => {
  let resultToReturn;
  await axios.get(`${baseApiUrl}games/${shooterGamApiKey}/scores/`)
    .then(res => {
      sortAndSaveScores(res);
    })
    .catch(err => {
      resultToReturn = err.response.data;
    });

  return resultToReturn;
};
