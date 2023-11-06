// https://school.programmers.co.kr/learn/courses/30/lessons/12924
//! 재귀함수로 통과 

function sum(i, total, n) {
  if (total === n) {
    return true; // 1
  } else if (total > n) {
    return false; // 0
  } else {
    return sum(i + 1, total + i, n); // 아니라면 재귀
  }
}

function solution(n) {
  let answer = 1;
  const lastN = n / 2 + 0.5;

  for (let i = 1; i < lastN; i++) {
    answer += sum(i, 0, n);
  }

  return answer;
}

console.log(solution(15)); // 4
console.log(solution(1)); // 1
