// https://school.programmers.co.kr/learn/courses/30/lessons/161990

function solution(wallpaper) {
  const x = [];
  const y = [];
  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      if (wallpaper[i][j] === "#") {
        x.push(i);
        y.push(j);
      }
    }
  }

  return [Math.min(...x), Math.min(...y), Math.max(...x) + 1, Math.max(...y) + 1];
}

console.log(solution([".#...", "..#..", "...#."])); // [0, 1, 3, 4]
console.log(
  solution([
    "..........",
    ".....#....",
    "......##..",
    "...##.....",
    "....#.....",
  ])
); // [1, 3, 5, 8]
console.log(
  solution([
    ".##...##.",
    "#..#.#..#",
    "#...#...#",
    ".#.....#.",
    "..#...#..",
    "...#.#...",
    "....#....",
  ])
); // [0, 0, 7, 9]
console.log(solution(["..", "#."])); // [1, 0, 2, 1]
