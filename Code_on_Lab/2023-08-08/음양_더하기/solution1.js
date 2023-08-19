// https://school.programmers.co.kr/learn/courses/30/lessons/76501

function solution(absolutes, signs) {
  const answer = signs.map((v, i) => (v ? +absolutes[i] : -absolutes[i]));
  return answer.reduce((a, b) => a + b);
}

console.log(solution([4, 7, 12], [true, false, true])); // 9
console.log(solution([1, 2, 3], [false, false, true])); // 0