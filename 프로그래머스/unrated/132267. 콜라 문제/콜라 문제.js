function solution(a, b, n) {
  let result = 0;

  while (n >= a) {
    let getCoke = Math.floor(n / a) * b;
    n = (n % a) + getCoke;
    result += getCoke;
  }

  return result;
}