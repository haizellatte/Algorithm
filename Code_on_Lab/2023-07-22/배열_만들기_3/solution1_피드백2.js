// https://school.programmers.co.kr/learn/courses/30/lessons/181895

function solution(arr, intervals) {
  return intervals
      .map(([a, b]) => arr.slice(a, b + 1))
      .reduce((a, b) => a.concat(b));
}

console.log(solution([1, 2, 3, 4, 5],[[1, 3], [0, 4]])); // [2, 3, 4, 1, 2, 3, 4, 5]


// const arr = [[1, 2, [3, 4]], [4, 5, [6, 7]]];
// console.log(arr);
// console.log(arr.flat(2));