require('../testUtils');

const { assert } = require('chai');
const { supportedLanguages } = require('../index');

describe('syncFunction', () => {
  it('should return 1,2,3', () => {
    assert.deepEqual(supportedLanguages('en-US, fr-CA', ['en', 'en-US']), [
      'en-US',
    ]);
    assert.deepEqual(supportedLanguages('en-US, fr-CA', []), []);
  });

  it('should return en-CA, en-US', () => {
    assert.deepEqual(supportedLanguages('en', ['en-CA', 'en-US']), [
      'en-CA',
      'en-US',
    ]);
  });
});
