// https://school.programmers.co.kr/learn/courses/30/lessons/181833

// Array.from(배열로 변환하고자 하는 유사 배열 객체, 배열의 모든 요소에 호출할 맵핑 함수)

function solution(n) {
  let arr = Array.from(Array(n), () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    arr[i][i] = 1;
  }
  return arr;
}

console.log(solution(3)); // [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
console.log(solution(6)); // [[1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1]]
console.log(solution(1)); // [[1]]