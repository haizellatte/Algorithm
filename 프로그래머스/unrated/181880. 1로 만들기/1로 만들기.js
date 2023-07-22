/*
let cnt = 0
1. 짝수라면 n/2 cnt++;
2. 홀수라면 (n - 1)/2 cnt++;
3. 위 과정을 1이 될때까지 반복하여 각 원소를 1로 만들기 위해 필요한 총 횟수를 리턴하라
*/

function calculator(acc, cur) {
  while (cur !== 1) {
    cur = cur % 2 === 0 ? cur / 2 : (cur - 1) / 2;
    acc++;
  }
  return acc;
}


function solution(num_list) {
  let result = num_list.reduce((acc, cur) => (calculator(acc, cur)), 0);

  return result;
}