import { savePlayerScore, sortAndSaveScores, retrievePlayerScore } from '../src/helpers/apiInteractions';

describe('Test apiInteractions', async () => {
  it('Will saveScore to the leaderboardAPI', (done) => {
    const res = await savePlayerScore('test', 10)
    expect().toEqual(true);
    done();
  });
  it('Will validate the invalidity of an empty name', (done) => {
    expect(isNamesValid('')).toEqual(false);
    done();
  });
});
