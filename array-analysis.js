const arrayAnalysis = (arr) => {
  const average = (arr) => arr.reduce((a, b) => a + b) / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;

  return {
    average: average(arr),
    min,
    max,
    length,
  };
};

module.exports = arrayAnalysis;
