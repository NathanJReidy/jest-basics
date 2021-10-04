const arrayAnalysis = require("./array-analysis");

test("takes an array of numbers and returns an object with average, min, max and length", () => {
  expect(arrayAnalysis([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("takes an array of numbers and returns average value", () => {
  expect(arrayAnalysis([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

test("takes an array of numbers and returns min value", () => {
  expect(arrayAnalysis([1, 8, 3, 4, 2, 6]).min).toBe(1);
});

test("takes an array of numbers and returns max value", () => {
  expect(arrayAnalysis([1, 8, 3, 4, 2, 6]).max).toBe(8);
});

test("takes an array of numbers and returns length of array", () => {
  expect(arrayAnalysis([1, 8, 3, 4, 2, 6]).length).toBe(6);
});
