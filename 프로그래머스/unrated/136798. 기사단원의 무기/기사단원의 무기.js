const nList = (n) => {
  let list = [];
  for (let i = 1; i <= n; i++) {
    list.push(i);
  }
  return list;
};

//* 각 수의 약수를 구해해주는 함수
const divisor = (n) => {
  let cnt = 0;
  for (let i = 1; i * i <= n; i++) {
    if (i * i === n) {
      cnt++;
    } else if(n % i === 0) {
      cnt += 2;
    }
  }
  return cnt;
};

function solution(number, limit, power) {
  return nList(number)
    .map((n) => divisor(n))
    .map((n) => (n > limit ? power : n))
    .reduce((a, b) => a + b);
}