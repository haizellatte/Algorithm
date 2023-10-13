// https://school.programmers.co.kr/learn/courses/30/lessons/172928
//* 함수로 분리

function CanCrossX(move, x, y, park, op) {
  for (let i = 1; i <= move; i++) {
    let toX = x;
    toX = toX + i * op;
    if (park[y][toX] === "X") {
      return false;
    }
  }
  return true;
}

function CanCrossY(move, x, y, park, op) {
  for (let i = 1; i <= move; i++) {
    let toY = y;
    toY = toY + i * op;
    if (park[toY][x] === "X") {
      return false;
    }
  }
  return true;
}

function solution(park, routes) {
  let [y, x] = park // 시작 좌표를 찾는다
    .map((p, i) => [i, p.indexOf("S")])
    .filter(([x, y]) => x >= 0 && y >= 0)
    .flat();
  const [maxY, maxX] = [park.length, park[0].length]; // 최대 공원 X, Y 좌표 (직사각형)

  routes.forEach((route) => {
    [dir, move] = route.split(" ");
    move = Number(move);

    if (dir === "E" && x + move < maxX) {
      let flag = CanCrossX(move, x, y, park, 1);
      x += flag ? move : 0;
    } else if (dir === "W" && x - move >= 0) {
      let flag = CanCrossX(move, x, y, park, -1);
      x -= flag ? move : 0;
    } else if (dir === "S" && y + move < maxY) {
      let flag = CanCrossY(move, x, y, park, 1);
      y += flag ? move : 0;
    } else if (dir === "N" && y - move >= 0) {
      let flag = CanCrossY(move, x, y, park, -1);
      y -= flag ? move : 0;
    }
  });

  return [y, x];
}

console.log(solution(["SOO", "OOO", "OOO"], ["E 2", "S 2", "W 1"])); // [2, 1]
// console.log(solution(["SOO", "OXX", "OOO"], ["E 2", "S 2", "W 1"])); // [0, 1]
// console.log(solution(["OSO", "OOO", "OXO", "OOO"], ["E 2", "S 3", "W 1"])); // [0, 0]
// console.log(solution(["OXXO", "XSXO", "XXXX"], ["E 1", "S 1"])); // [1, 1]
// console.log(solution(["OOO", "OSO", "OOO", "OOO"], ["N 2", "S 2"])); // [3, 1]
// console.log(solution(["OXX", "XSO", "XOO"], ["E 1", "S 1"])); // [2, 2]
// console.log(solution(["OXXO", "XSXO", "XXXX"], ["E 1", "S 1"])); // [1, 1]
// console.log(solution(["OXO", "XSX", "OXO"], ["S 1", "E 1", "W 1", "N 1"])); // [1, 1]
