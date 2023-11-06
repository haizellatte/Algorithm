// https://school.programmers.co.kr/learn/courses/30/lessons/12924
//! ⏳시간 초과 발생

function solution(n) {
  const lastN = n / 2 + 0.5;
  let count = 1;

  for (let i = 1; i <= lastN; i++) {
    let bucket = 0;
    for (let j = i; j <= lastN; j++) {
      bucket += j;
      if (bucket === n) {
        count++;
      }
    }
  }
  return count;
}

console.log(solution(15)); // 4
