function solution(n) {
  let [f0, f1] = [0, 1];

  for (let i = 2; i <= n; i++) {
    result = (f0 + f1) % 1234567;
    [f0, f1] = [f1, result];
  }

  return result;
}
