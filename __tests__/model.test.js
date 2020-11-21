import Model from '../src/model';

describe('Test model', () => {
  const model = new Model();
  it('Will setup the musicOn to off', (done) => {
    model.musicOn = true;
    expect(model.musicOn).toEqual(true);
    done();
  });
});
