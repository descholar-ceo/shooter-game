import { savePlayerScore, sortAndSaveScores, retrievePlayerScore } from '../src/helpers/apiInteractions';

describe('Test apiInteractions', () => {
  it('Will saveScore to the leaderboardAPI', async (done) => {
    await savePlayerScore('test', 10);
    const players = await retrievePlayerScore();
    console.log(players);
    // expect(res).toEqual(true);
    done();
  });
});
