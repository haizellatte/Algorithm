function isPrime(n) {
  let arr = Array(n + 1).fill(true).fill(false, 0, 2);

  for (let i = 2; i * i <= n; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }
  return arr;
}

function solution(n) {
  return isPrime(n).filter(x => x).length;
}