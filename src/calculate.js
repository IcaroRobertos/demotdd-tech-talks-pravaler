// const calculate = (a, b = 0, c = 0) => a + b + c;

const calculate = (...numbers) => numbers.reduce((total, number) => total + number);

module.exports = calculate;
