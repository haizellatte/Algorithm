// https://school.programmers.co.kr/learn/courses/30/lessons/181840

// includes 안쓰기

function solution(num, n) {
  let answer = 0;

  for (let i of num) {
    if (i === n) {
      answer = 1;
      break;
    }
  }
  return answer;
}

console.log(solution([1, 2, 3, 4, 5],	3)); // 1
console.log(solution([15, 98, 23, 2, 15],	20)); // 0

console.log(solution([1, 2, 3, 4, 3, 5],	3)); // 2
