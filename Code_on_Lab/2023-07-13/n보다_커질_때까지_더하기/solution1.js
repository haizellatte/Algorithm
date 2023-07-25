// https://school.programmers.co.kr/learn/courses/30/lessons/181884

function solution(numbers, n) {
  let result = 0;
  for (let i = 0; i <= numbers.length; i++) {
      result += numbers[i];
      if (result > n) {
          break;
      }
  }
  return result;
};

console.log(solution([34, 5, 71, 29, 100, 34], 123)); //139

