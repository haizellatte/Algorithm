// https://school.programmers.co.kr/learn/courses/30/lessons/181832

//* 공용 함수를 탬플릿화하고 싶으면 어떻게 해야 할까요? 🥲

const MoveFunction = (ifCondition, dirNow, move, condition, dirTo) => {
  return (
    `${ifCondition} (dir === ${dirNow}) {
        ${move};
        if (${condition}) {
          dir = ${dirTo};
        }
      };`
  )
};

function solution(n) {
  let arr = Array.from(Array(n), () => Array(n).fill(0));
  let [x, y] = [0, 0];
  let dir = 'right';

  for (let i = 1; i <= n * n; i++) {
    arr[x][y] = i;

    MoveFunction('if', 'right', y += 1, y === n - 1 || arr[x][y + 1] !== 0, "down");
    MoveFunction('else if', 'down', x += 1, x === n - 1 || arr[x + 1][y] !== 0, "left");
    MoveFunction('else if', 'left', y -= 1, y === 0 || arr[x][y - 1] !== 0, "up");
    MoveFunction('else if', 'up', x -= 1, x === 0 || arr[x - 1][y] !== 0, "right");

    return arr;
  }
}

console.log(solution(4)); // [[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]]
console.log(solution(5)); // [[1, 2, 3, 4, 5], [16, 17, 18, 19, 6], [15, 24, 25, 20, 7], [14, 23, 22, 21, 8], [13, 12, 11, 10, 9]]
console.log(solution(1)); // [[1]]