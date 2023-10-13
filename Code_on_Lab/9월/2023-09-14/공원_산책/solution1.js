// https://school.programmers.co.kr/learn/courses/30/lessons/172928
//* 장애물을 만나거나 지나가면 해당 명령은 무시된다.

function solution(park, routes) {
  let [y, x] = park // 시작 좌표를 찾는다
    .map((p, i) => [i, p.indexOf("S")])
    .filter(([x, y]) => x >= 0 && y >= 0)
    .flat();
  let [maxY, maxX] = [park.length, park[0].length]; // 최대 공원 X, Y 좌표

  routes.forEach((route) => {
    [dir, move] = route.split(" ");
    move = Number(move);
    if (dir === "E" && x + move < maxX) {
      let flag = true;
      for (let i = 1; i <= move; i++) {
        let toX = x;
        toX += i;
        if (park[y][toX] === "X") {
          flag = false;
        }
      }
      // console.log([y, x]);
      x += flag ? move : 0;
    } else if (dir === "W" && x - move >= 0) {
      let flag = true;
      for (let i = 1; i <= move; i++) {
        let toX = x;
        toX -= i;
        if (park[y][toX] === "X") {
          flag = false;
        }
      }
      // console.log([y, x]);
      x -= flag ? move : 0;
    } else if (dir === "S" && y + move < maxY) {
      let flag = true;
      for (let i = 1; i <= move; i++) {
        let toY = y;
        toY += i;
        if (park[toY][x] === "X") {
          flag = false;
        }
      }
      y += flag ? move : 0;
      // console.log([y, x]);
    } else if (dir === "N" && y - move >= 0) {
      let flag = true;
      for (let i = 1; i <= move; i++) {
        let toY = y;
        toY -= i;
        if (park[toY][x] === "X") {
          flag = false;
        }
      }
      y -= flag ? move : 0;
      // console.log([y, x]);
    }
  });

  return [y, x];
}

console.log(solution(["SOO", "OOO", "OOO"], ["E 2", "S 2", "W 1"])); // [2, 1]
console.log(solution(["SOO", "OXX", "OOO"], ["E 2", "S 2", "W 1"])); // [0, 1]
console.log(solution(["OSO", "OOO", "OXO", "OOO"], ["E 2", "S 3", "W 1"])); // [0, 0]
console.log(solution(["OXXO", "XSXO", "XXXX"], ["E 1", "S 1"])); // [1, 1]
console.log(solution(["OOO", "OSO", "OOO", "OOO"], ["N 2", "S 2"])); // [3, 1]
console.log(solution(["OXX", "XSO", "XOO"], ["E 1", "S 1"])); // [2, 2]
console.log(solution(["OXXO", "XSXO", "XXXX"], ["E 1", "S 1"])); // [1, 1]
console.log(solution(["OXO", "XSX", "OXO"], ["S 1", "E 1", "W 1", "N 1"])); // [1, 1]
