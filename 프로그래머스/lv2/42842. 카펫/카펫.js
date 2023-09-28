function solution(brown, yellow) {
  let total = brown + yellow;
  let [x, y] = [1, 1];

  for (let i = 1; i <= Math.sqrt(total); i++) {
      y = i;
      x = total / y;
      if ((x - 2) * (y - 2) === yellow) { // 안쪽 가로 * 세로 === yellow가 같아야 한다.
        break;
      }
  }

  return [x, y];
}