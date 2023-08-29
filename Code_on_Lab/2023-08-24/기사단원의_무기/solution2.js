// https://school.programmers.co.kr/learn/courses/30/lessons/136798

//* 0~number까지 배열을 만들어주는 함수
const nList = (n) => {
  let list = [];
  for (let i = 1; i <= n; i++) {
    list.push(i);
  }
  return list;
};

/* 
! 약수를 구하는 함수에서 시간을 줄일 수 있는 방법 !
* 어떤 수의 약수를 i라고 했을 때, 다른 약수는 n/i가 된다. => 2개 보장
* ex) 2 -> [1, 2] / 4 -> [1, 4][2, 2] / 10 -> [1, 10][2, 5]
* 따라서 n % i가 0이라면 약수 1쌍(2개)가 존재하고, i * i가 n이라면 약수가 1개가 추가로 존재한다.
* n은 최대 n의 제곱근까지만 확인하면 되기 때문에 i * i까지 반복한다.
*/

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

console.log(solution(5, 3, 2)); // 10
console.log(solution(10, 3, 2)); // 21