import isNamesValid from '../src/helpers/validations';

describe('Test validations', () => {
  it('Will validate the validity of the name', (done) => {
    expect(isNamesValid('nezago')).toEqual(true);
    done();
  });
  it('Will validate the invalidity of an empty name', (done) => {
    expect(isNamesValid('')).toEqual(false);
    done();
  });
});
