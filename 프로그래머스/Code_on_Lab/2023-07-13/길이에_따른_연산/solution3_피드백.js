// https://school.programmers.co.kr/learn/courses/30/lessons/181879

// 참 잘했어요 :)
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

console.log(solution([3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1])); // 51

