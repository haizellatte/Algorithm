// https://school.programmers.co.kr/learn/courses/30/lessons/181895

// 구조분해 할당과 spread 연산자 활용하기

function solution(arr, intervals) {
  const [[a1, b1], [a2, b2]] = intervals;
  
  return [...arr.slice(a1, b1 + 1), ...arr.slice(a2, b2 + 1)];
}

console.log(solution([1, 2, 3, 4, 5],[[1, 3], [0, 4]])); // [2, 3, 4, 1, 2, 3, 4, 5]