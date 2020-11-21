import { savePlayerScore, sortAndSaveScores, retrievePlayerScore } from '../src/helpers/apiInteractions';

describe('Test apiInteractions', () => {
  it('Will saveScore to the leaderboardAPI', async (done) => {
    const res = await savePlayerScore('test', 10);
    expect(res).toHaveProperty('result');
    expect(res.result).toEqual('Leaderboard score created correctly.');
    done();
  });
  it('Will not saveScore to the leaderboardAPI because score is not provided', async (done) => {
    const res = await savePlayerScore('test');
    expect(res).toHaveProperty('message');
    expect(res.message).toEqual('You need to provide a valid score for the leaderboard');
    done();
  });
});
