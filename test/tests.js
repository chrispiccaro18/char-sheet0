import roll from '../src/roll.js'

const test = QUnit.test;

test('return a random number between 1 and 10', function(assert) {
    const randomNumber = 0.65
    const expected = 7;
    const result = roll(randomNumber);
    assert.equal(result, expected);
});