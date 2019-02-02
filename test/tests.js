import abilityModify from '../src/ability-modify.js';

const test = QUnit.test;

test('return mod number as per ../assets/modify-table.png', function(assert) {
    const input = 1;
    const expected = -5;
    const result = abilityModify(input);
    assert.equal(result, expected);
});

test('return mod number as per ../assets/modify-table.png', function(assert) {
    const input = 3;
    const expected = -4;
    const result = abilityModify(input);
    assert.equal(result, expected);
});

test('return mod number as per ../assets/modify-table.png', function(assert) {
    const input = 5;
    const expected = -3;
    const result = abilityModify(input);
    assert.equal(result, expected);
});

test('return mod number as per ../assets/modify-table.png', function(assert) {
    const input = 7;
    const expected = -2;
    const result = abilityModify(input);
    assert.equal(result, expected);
});

test('return mod number as per ../assets/modify-table.png', function(assert) {
    const input = 9;
    const expected = -1;
    const result = abilityModify(input);
    assert.equal(result, expected);
});

test('return mod number as per ../assets/modify-table.png', function(assert) {
    const input = 11;
    const expected = +0;
    const result = abilityModify(input);
    assert.equal(result, expected);
});

test('return mod number as per ../assets/modify-table.png', function(assert) {
    const input = 13;
    const expected = +1;
    const result = abilityModify(input);
    assert.equal(result, expected);
});