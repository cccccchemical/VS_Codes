const assert = require('assert');
const Rooster = require('../index');


describe ('Rooster', () => {
  describe('.announceDawn', () => {
    it('returns a rooster call', () => {
        const expected = 'moo!';
        const actual = Rooster.announceDawn();

        assert.strictEqual(expected, actual)

    });
  });

  describe('.timeAtDawn', () => {
    it('returns its argument as a string', () => {
      const actual = typeof Rooster.timeAtDawn();

      assert.strictEqual(actual, string);
    });

    it('throws an error if passed a number less than 0', () =>{
      
    })
  })
});