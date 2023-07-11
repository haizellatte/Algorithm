// https://school.programmers.co.kr/learn/courses/30/lessons/181861#

function solution(arr) {
  let result = [];
  
  for (let i = 0; i < arr.length; i++) {
    result = result.concat(new Array(arr[i]).fill(arr[i]));
  }
  return result;
}