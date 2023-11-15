function isPrime(n) {
    // 2부터 n제곱근까지의 수로 n을 나눴을 때 나누어 떨어지는 경우가 한 번이라도 있으면 n은 소수가 아니다.
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    // 모두 나누어 떨어지지 않으면 n은 소수이다.
    return true;
}


function solution(n, k) {
  let arr = n.toString(k).split(0).filter(x => x !== '1' && x !== '').map(Number);
  // return arr;

  return arr.filter((x) => isPrime(x)).length;
}