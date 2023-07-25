// https://school.programmers.co.kr/learn/courses/30/lessons/181901

function solution(n, k) {
  let answer = [];

  for (let i = k; i < n + 1; i++) {
    if (i % k === 0) {
      answer.push(i);
    }
  }

  return answer;
};

console.log(solution(10,	3)) //[3, 6, 9]