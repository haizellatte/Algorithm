// https://school.programmers.co.kr/learn/courses/30/lessons/136798

//⚠️ 채점 결과 몇몇 케이스에서 시간 초과가 발생했다.

//* 0~number까지 배열을 만들어주는 함수
const nList = (n) => {
  let list = [];
  for (let i = 1; i <= n; i++) {
    list.push(i);
  }
  return list;
};

//* 각 수의 약수를 구해해주는 함수
const divisor = (n) => {
  let cnt = 1;
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      cnt++;
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

console.log(solution(5, 3, 2)); // 10
console.log(solution(10, 3, 2)); // 21