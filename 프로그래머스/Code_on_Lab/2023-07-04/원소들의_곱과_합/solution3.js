// https://school.programmers.co.kr/learn/courses/30/lessons/181929

function sum(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }

  return result;
}

function multi(arr) {
  let result = 1;

  for (let i = 0; i < arr.length; i++) {
    result *= arr[i];
  }

  return result;
}

function solution(num_list) {
  let a = sum(num_list);  //합
  let b = multi(num_list); //곱

  a = a * a;

  return b < a ? 1 : 0;
}

console.log(solution([3, 4, 5, 2, 1])); // 1
console.log(solution([5, 7, 8, 3])); // 0