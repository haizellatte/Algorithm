// https://school.programmers.co.kr/learn/courses/30/lessons/132267

function solution(a, b, n) {
  let result = 0;

  //* 1. 남은 빈병의 개수가 콜라를 받기 위해 마트에 줘야하는 병수(a)보다 클 때까지 반복한다.
  while (n >= a) {
    //* 2. 얻을 수 있는 콜라 개수 = (빈병/필요한 병수) * 리턴해주는 병수
    let getCoke = Math.floor(n / a) * b;
    //* 3. 남은 병수 = 마트에 주고 남은 병수(나머지값) + 얻은 콜라 개수
    n = n % a + getCoke;
    result += getCoke;
  }

  return result;
}

console.log(solution(2, 1, 20)); // 19
console.log(solution(3, 1, 20)); // 9
console.log(solution(5, 3, 21)); // 27