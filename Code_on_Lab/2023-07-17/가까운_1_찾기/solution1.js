// https://school.programmers.co.kr/learn/courses/30/lessons/181898

//! 테스트케이스 3개는 통과하는데, 채점하면 통과되지 않음!

function solution(arr, idx) {
  let result = -1;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1 && i >= idx) {
      result = i;
    }
  }
  return result;
}

console.log(solution([0, 0, 0, 1], 1)); // 3
console.log(solution([1, 0, 0, 1, 0, 0], 4)); // -1
console.log(solution([1, 1, 1, 1, 0],	3)); // 3
