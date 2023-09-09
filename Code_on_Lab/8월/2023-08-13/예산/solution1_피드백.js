// https://school.programmers.co.kr/learn/courses/30/lessons/12982

function sum(arr) {
  return arr.reduce((a, b) => a + b);
}
function solution(d, budget) {
  if (sum(d) <= budget) {
    return d.length;
  }

  const sorted = d.sort((a, b) => a - b);
  let cnt = 0;

  for (let i = 0; i < sorted.length; i++) {
    budget -= sorted[i];

    if (budget < 0) {
      break;
    }
    cnt++;
  }

  return cnt;
}

console.log(solution([1,3,2,5,4], 9)); // 3
// console.log(solution([2,2,3,3], 10)); // 4