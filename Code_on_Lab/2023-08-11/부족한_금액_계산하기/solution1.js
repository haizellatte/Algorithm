// https://school.programmers.co.kr/learn/courses/30/lessons/82612

function solution(price, money, count) {
  let answer = 0;

  for (let i = price; i <= price * count; i += price) {
    answer += i;
  }

  return money >= answer ? 0 : answer - money;
}

console.log(solution(3, 20, 4)); // 10