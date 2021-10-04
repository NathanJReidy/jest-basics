const calculator = require("../src/calculator");

test("add two numbers", () => {
  expect(calculator.add(5, 10)).toBe(15);
});

test("subtract two numbers", () => {
  expect(calculator.subtract(10, 5)).toBe(5);
});

test("divide two numbers", () => {
  expect(calculator.divide(10, 5)).toBe(2);
});

test("multiply two numbers", () => {
  expect(calculator.multiply(5, 10)).toBe(50);
});

test("number divided by 0 returns null", () => {
  expect(calculator.divide(10, 0)).toBeNull();
});
