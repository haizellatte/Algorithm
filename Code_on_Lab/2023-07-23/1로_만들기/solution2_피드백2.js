// https://school.programmers.co.kr/learn/courses/30/lessons/181880

/*
1. 짝수라면 n/2 횟수++;
2. 홀수라면 (n - 1)/2 횟수++;
3. 위 과정을 1이 될때까지 반복하여 각 원소를 1로 만들기 위해 필요한 총 횟수를 리턴하라
*/

// 리듀스에서 처리하려고 하다 보니까 이렇게 구조가 잡힌거네요.
// calculator함수는 1이 될 때까지의 횟수만 구하면 되죠.
// num_list의 각각의 횟수를 먼저 구하고
// 리듀스는 합계만 구하는 식으로 분리하는게 좋겠어요.

function calculator(n) {
  let result = 0;

  while (n !== 1) {
    n = n % 2 === 0 ? n / 2 : (n - 1) / 2;
    result += 1;
  }

  return result;
}

function solution(num_list) {
  return num_list.map(calculator).reduce((a, b) => a + b, 0);
}

console.log(solution([12, 4, 15, 1, 14])); // 11
