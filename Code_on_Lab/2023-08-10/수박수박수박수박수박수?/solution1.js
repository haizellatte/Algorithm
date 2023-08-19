// https://school.programmers.co.kr/learn/courses/30/lessons/12922

function solution(n) {
  let answer = "";
  for (let i = 0; i < n; i++) {
    answer += i % 2 === 0 ? "수" : "박";
  }
  return answer;
}

console.log(solution(3)); // "수박수"
console.log(solution(4)); // "수박수박"