// https://school.programmers.co.kr/learn/courses/30/lessons/12943

// is 접두사를 붙이는 함수는
// 인자로 넘어가는 값에 대한 판단을 하기 위한 함수
// n이 짝수인가요?
function toEven(n) {
  return n / 2;
}

function toOdd(n) {
  return n * 3 + 1;
}

function solution(n) {
  let count = 0;

  while (n !== 1) {
    if (n % 2 === 0) {
      n = toEven(n);
    } else {
      n = toOdd(n);
    }
    count++;
  }

  return count < 500 ? count : -1;
}

console.log(solution(6)); // 8
console.log(solution(16)); // 4
console.log(solution(626331)); // -1