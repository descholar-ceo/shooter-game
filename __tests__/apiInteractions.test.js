import { savePlayerScore, sortAndSaveScores, retrievePlayerScore } from '../src/helpers/apiInteractions';

describe('Test apiInteractions', () => {
  it('Will saveScore to the leaderboardAPI', async (done) => {
    const res = await savePlayerScore('test', 10);
    expect(res).toHaveProperty('result');
    expect(res.result).toEqual('Leaderboard score created correctly.');
    done();
  });
});
