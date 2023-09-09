// https://school.programmers.co.kr/learn/courses/30/lessons/42748

function solution(arr, commands) {
  return commands.map(([i, j, k]) => arr.slice(i - 1, j).sort((a, b) => a - b)[k - 1]);
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
); // [5, 6, 3]
console.log(
  solution(
    [1, 5, 2, 60, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
); // [5, 60, 3]