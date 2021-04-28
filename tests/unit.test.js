const hello = require('./hello');
const assert = require('assert');

it ('should return a hello world string', () => {
  const actual = hello.sayHello();
  const expected = "Hello world!";
  assert.strictEqual(actual, expected);
});

it ('should not return an empty string', () => {
  const actual = hello.sayHello();
  assert.notStrictEqual(actual, '');
});