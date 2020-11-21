import axios from 'axios';

const baseApiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const shooterGamApiKey = 'KJOL8sVVdDaV9mb3w7Xx';

export const savePlayerScore = async (playerName, score) => {
  await axios.post(`${baseApiUrl}games/${shooterGamApiKey}/scores/`, { user: playerName, score })
    .then(result => {
      return result.data
    })
    .catch(err => {
      return err.response.data;
    });
};

export const retrievePlayerScore = () => {};
