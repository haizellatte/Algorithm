function solution(n) {
  let bettery = 0; // 건전지 사용량

  while (n !== 0) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      n -= 1;
      bettery++;
    }
  }

  return bettery;
}