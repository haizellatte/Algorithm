// https://school.programmers.co.kr/learn/courses/30/lessons/181898

//! 10번줄에서 result를 i로 바꿔주지 않고 바로 i를 리턴해서 통과되었다. 왜 재할당이 안되는걸까 ????

function solution(arr, idx) {
  let result = -1;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1 && i >= idx) {
      return i;
    }
  }
  return result;
}

console.log(solution([0, 0, 0, 1], 1)); // 3
console.log(solution([1, 0, 0, 1, 0, 0], 4)); // -1
console.log(solution([1, 1, 1, 1, 0],	3)); // 3
