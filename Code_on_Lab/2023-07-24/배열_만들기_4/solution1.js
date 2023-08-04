// https://school.programmers.co.kr/learn/courses/30/lessons/181918

/*
* [풀이 노트]
* 0.변수 i를 초기값 0으로 설정하고, i < arr.length일 때 아래 작업을 반복한다.
* 1. stk.length === 0 ? stk.push(arr[i]) i++;
* 2. stk.length > 0 && stk[stk.length - 1] < arr[i] ? stk.push(arr[i]) i++;
* 3. stk.length > 0 && stk[stk.length - 1] >= arr[i] ? stk.pop();
* 4. return stk;
*/

function solution(arr) {
  let stk = [];
  let i = 0;
  while(i < arr.length) {
    if (stk.length === 0) {
      stk.push(arr[i]);
      i++;
    } else {
      if (stk[stk.length - 1] < arr[i]) {
        stk.push(arr[i]);
        i++;
      } else {
        stk.pop();
      }
    }
  }
  return stk;
}

console.log(solution([1, 4, 2, 5, 3])); // [1, 2, 3]