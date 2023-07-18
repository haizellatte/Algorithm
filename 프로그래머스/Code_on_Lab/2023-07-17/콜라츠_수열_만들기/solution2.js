// https://school.programmers.co.kr/learn/courses/30/lessons/181919?language=javascript

// 이건 왜 안되지 ???

const even = n => n / 2;
const odd = n => 3 * n + 1;

function solution(n) {
  let result = [n];
  
  while (n !== 1) {
    const f = (n % 2 === 0) ? even : odd;
    n = f(n);
    result.push(n);
  }
  return result;
}

console.log(solution(10)); // [10, 5, 16, 8, 4, 2, 1]