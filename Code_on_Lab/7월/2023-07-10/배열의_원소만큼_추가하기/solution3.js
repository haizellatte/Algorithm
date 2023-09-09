// https://school.programmers.co.kr/learn/courses/30/lessons/181861#

function solution(arr) {
  let result = [];
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i]; j++) {
      result.push(arr[i]);
    }
  }
  return result;
}