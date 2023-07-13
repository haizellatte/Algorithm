function add(numbers) {
  let result = 0;
  for (let i of numbers) {
    result += i;
  }
  return result;
};

function multiple(numbers) {
  let result = 1;
  for (let i of numbers) {
    result *= i;
  }
  return result;
};

function solution(numbers, n) {
  const f = (numbers.length >= 11) ? add : multiple;
  return f(numbers);
};