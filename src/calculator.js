const calculator = (() => {
  const add = (a, b) => a + b;

  const subtract = (a, b) => a - b;

  const divide = (a, b) => (b === 0 ? null : a / b);

  const multiply = (a, b) => a * b;

  return {
    add,
    subtract,
    divide,
    multiply,
  };
})();

module.exports = calculator;
