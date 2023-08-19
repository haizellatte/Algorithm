// https://school.programmers.co.kr/learn/courses/30/lessons/12919#

// Map + filter

function solution(seoul) {
  const kimIndex = seoul.findIndex(v => v === 'Kim');
  return `김서방은 ${kimIndex}에 있다`;
}

console.log(solution(["Jane", "Kim"])); // "김서방은 1에 있다"