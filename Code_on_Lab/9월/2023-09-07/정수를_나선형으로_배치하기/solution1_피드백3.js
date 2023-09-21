// https://school.programmers.co.kr/learn/courses/30/lessons/181832?language=javascript

function solution(n) {

  const result = Array.from(Array(n), () => Array(n).fill(0));
  let direction = 1;
  let m = 1;
  let x = -1;
  let y = 0;

  while (n > 0) {
    for (let i = 0; i < n; i++) {
      x += direction;
      result[y][x] = m;
      m += 1;
    }

    // console.log({result});
    n -= 1;

    for (let i = 0; i < n; i++) {
      y += direction;
      result[y][x] = m;
      m += 1;
    }
    direction *= -1;
    // console.log({result});
  }

  return result;
}

// [[0, 1, 2, 3],
//  [4, 5, 6, 7],
//  [8, 9, 10, 11],
//  [12, 13, 14, 15]]

console.log(solution(4));
// [[1, 2, 3, 4],
//  [12, 13, 14, 5],
//  [11, 16, 15, 6],
//  [10, 9, 8, 7]]
// console.log(solution(5));
// [[1, 2, 3, 4, 5],
//  [16, 17, 18, 19, 6],
//  [15, 24, 25, 20, 7],
//  [14, 23, 22, 21, 8],
//  [13, 12, 11, 10, 9]]