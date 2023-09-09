// https://school.programmers.co.kr/learn/courses/30/lessons/181887

/*
홀수 원소들의 합 VS 짝수 원소들의 합 중 큰 값을 리턴하라.
단, 첫번째 원소는 0번이 아닌 1번째 원소이다. -> 즉 짝수 인덱스가 홀수가 된다.
*/

function solution(num_list) {
  // 홀수번째 원소들의 합(짝수 인덱스)
  let oddSum = num_list.filter((el, idx) => idx % 2 === 0).reduce((acc, cur) => acc + cur, 0);
   // 짝수번째 원소들의 합(홀수 인덱스)
  let evenSum = num_list.filter((el, idx) => idx % 2 === 1).reduce((acc, cur) => acc + cur, 0);
  
  return oddSum > evenSum ? oddSum : evenSum;
}

console.log(solution([4, 2, 6, 1, 7, 6])); // 17
console.log(solution([-1, 2, 5, 6, 3])); // 8