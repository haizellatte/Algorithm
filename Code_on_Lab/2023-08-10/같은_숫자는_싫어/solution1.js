// https://school.programmers.co.kr/learn/courses/30/lessons/12906?language=javascript

function solution(arr) {
  return arr.filter((v, i) => v !== arr[i - 1]);
  // return arr.filter((v, i) => v !== arr[i + 1]);
}

console.log(solution([1, 1, 3, 3, 0, 1, 1])); // [1,3,0,1]
console.log(solution([4, 4, 4, 3, 3])); // [4,3]