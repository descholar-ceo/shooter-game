import axios from 'axios';

const baseApiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const shooterGamApiKey = 'KJOL8sVVdDaV9mb3w7Xx';

export const savePlayerScore = async (playerName, score) => {
  const resultToReturn = await axios.post(`${baseApiUrl}games/${shooterGamApiKey}/scores/`, { user: playerName, score })
    .then(result => result.data)
    .catch(err => err.response.data);
  return resultToReturn;
};

export const sortScores = (responseArr) => {
  const newFormattedScoresArr = [];
  const { result } = responseArr.data;

  result.forEach(curr => {
    newFormattedScoresArr.push([curr.user, curr.score]);
  });

  newFormattedScoresArr.sort((a, b) => b[1] - a[1]);
  const topTenPlayers = [];
  for (let i = 0; i < 10; i += 1) {
    topTenPlayers.push(newFormattedScoresArr[i]);
  }
  return topTenPlayers;
};

export const retrievePlayerScore = async () => {
  const resultToReturn = await axios.get(`${baseApiUrl}games/${shooterGamApiKey}/scores/`)
    .then(res => sortScores(res))
    .catch(err => err);
  return resultToReturn;
};
