function solution(park, routes) {
  let [y, x] = park // 시작 좌표를 찾는다
    .map((p, i) => [i, p.indexOf("S")])
    .filter(([x, y]) => x >= 0 && y >= 0)
    .flat();
  let [maxY, maxX] = [park.length, park[0].length]; // 최대 공원 X, Y 좌표
  // console.log([maxY, maxX]);
  // console.log([y, x]);

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