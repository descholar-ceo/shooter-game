import Model from '../src/model';

describe('Test model', () => {
  const model = new Model();
  it('Will setup the musicOn to off', (done) => {
    model.musicOn = false;
    expect(model.musicOn).toEqual(false);
    done();
  });
  it('Will setup the soundOn to off', (done) => {
    model.soundOn = false;
    expect(model.soundOn).toEqual(false);
    done();
  });
  it('Will setup the bgMusicPlaying to on', (done) => {
    model.bgMusicPlaying = true;
    expect(model.bgMusicPlaying).toEqual(true);
    done();
  });
});
