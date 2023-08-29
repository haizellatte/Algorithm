// https://school.programmers.co.kr/learn/courses/30/lessons/12921

//! 정확성 테스트는 모두 통과했지만 효율성 테스트는 3건이 시간 초과된다 🥲

function isPrime(n) {
  if (n === 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) { //
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(n) {
  let result = 0;

  for (let i = 1; i <= n; i++) { // 10000000
    result += isPrime(i) ? 1 : 0;
  }

  return result;
}

// console.log(solution(10)); // 4
// console.log(solution(5)); // 3
console.log(solution(10000000)); // 3