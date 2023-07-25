// https://school.programmers.co.kr/learn/courses/30/lessons/181929
// 유지보수, 추상화, 일반화 높임 (실무에 가깝다.)

function f(arr, result, fn) {
  for (let i = 0; i < arr.length; i++) {
    result = fn(result, arr[i]);
  }

  return result;
}

function sum(arr) {
  return f(arr, 0, function(a, b) {
    return a + b;
  })
}

// console.log("sum", sum([1, 2, 3, 4, 5])); // 15

function multi(arr) {
  return f(arr, 1, function(a, b) {
    return a * b;
  })
}

// console.log("multi", multi([1, 2, 3, 4, 5])); // 120

function solution(num_list) {
  let a = sum(num_list);  //합
  let b = multi(num_list); //곱

  a = a * a;

  // console.log(a);
  // console.log(b);
  return b < a ? 1 : 0;
}

console.log(solution([3, 4, 5, 2, 1])); // 1
console.log(solution([5, 7, 8, 3])); // 0