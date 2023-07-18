// https://school.programmers.co.kr/learn/courses/30/lessons/181919?language=javascript

function solution(n) {
  let result = [n];
  
  while(n !== 1) {
    if (n % 2 === 0) {
      n = n / 2;
      result.push(n);
    } else {
      n = 3 * n + 1;
      result.push(n);
    }
  }
  return result;
}

console.log(solution(10)); // [10, 5, 16, 8, 4, 2, 1]