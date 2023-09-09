// https://school.programmers.co.kr/learn/courses/30/lessons/12940

/*
 * 문제 : 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하세요.
 * [최대 공약수 & 최소 공배수 구하는 법]
 * 1. 두 수 중에서 큰 수를 작은 수로 나눈다.
 * 2. 나누고 난 나머지가 0 이라면 작은 수가 최대공약수이다.
 * 3. 만약 나머지가 0 이 아니라면, 작은 수를 다시 나머지로 나눈다.
 * 4. 두 수의 곱을 최대 공약수로 나눈 값이 최소 공배수가 된다.
 */

// 좀 더 간단히 정리 !
function solution(a, b) {
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);
  return [gcd(a, b), lcm(a, b)];
}

console.log(solution(3, 12)); // [3, 12]
console.log(solution(2, 5)); // [1, 10]
