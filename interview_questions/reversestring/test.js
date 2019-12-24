const reverse = require("./index");

test('Reverse function exists', () => {
    expect(reverse).toBeDefined();
});

test('Reverse reverses a string', () => {
    expect(reverse('abc')).toEqual('cba');
});

test('Reverse reverses a string', () => {
    expect(reverse('  abcd')).toEqual('dcba  ');
});