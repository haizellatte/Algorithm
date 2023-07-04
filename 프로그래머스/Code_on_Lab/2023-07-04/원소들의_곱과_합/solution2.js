// https://school.programmers.co.kr/learn/courses/30/lessons/181929

function solution(num_list) {
  let sum = 0;  //합
  let total = 1; //곱

  // 더하기
  for (let i = 0; i < num_list.length; i++) {
    sum += num_list[i];
  }
  sum = sum * sum;
  
  // 곱하기
  for (let i = 0; i < num_list.length; i++) {
    total *= num_list[i];
  }

  return total < sum ? 1 : 0;
}

console.log(solution([3, 4, 5, 2, 1])); // 1
console.log(solution([5, 7, 8, 3])); // 0