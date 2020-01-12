const isPrime = require("./index");

test("should return a function", () => {
  expect(typeof isPrime).toEqual("function");
});

test("should boolean", () => {
  expect(isPrime(5)).toEqual(false);
  expect(isPrime(500)).toEqual(false);
  expect(isPrime(15)).toEqual(false);
});
