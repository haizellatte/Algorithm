// https://school.programmers.co.kr/learn/courses/30/lessons/12943

function isEven(n) {
  return n / 2;
}

function isOdd(n) {
  return n * 3 + 1;
}

function solution(n) {
  let count = 0;

  while (n !== 1) {
    if (n % 2 === 0) {
      n = isEven(n);
      count++;
    } else {
      n = isOdd(n);
      count++;
    }
  }

  return count < 500 ? count : -1;
}

console.log(solution(6)); // 8
console.log(solution(16)); // 4
console.log(solution(626331)); // -1