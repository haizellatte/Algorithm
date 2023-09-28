function solution(brown, yellow) {
  let total = brown + yellow;
  let [x, y] = [1, 1];

  for (let i = 1; i <= Math.sqrt(total); i++) {
    if (total % i === 0) {
      y = i;
      x = total / y;
      if ((x - 2) * (y - 2) === yellow) {
        break;
      }
    }
  }

  return [x, y];
}