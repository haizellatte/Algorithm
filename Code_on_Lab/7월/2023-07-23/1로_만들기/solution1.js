// https://school.programmers.co.kr/learn/courses/30/lessons/181880

/*
1. 짝수라면 n/2 횟수++;
2. 홀수라면 (n - 1)/2 횟수++;
3. 위 과정을 1이 될때까지 반복하여 각 원소를 1로 만들기 위해 필요한 총 횟수를 리턴하라
*/

function solution(num_list) {
  let result = num_list.reduce((acc, cur) => {
    while (cur !== 1) {
        cur = cur % 2 ? (cur - 1) / 2 : cur / 2;
        acc++;
    }
    return acc;
  }, 0);

  return result;
}

console.log(solution([12, 4, 15, 1, 14])); // 11
