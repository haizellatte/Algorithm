// https://school.programmers.co.kr/learn/courses/30/lessons/181854

function solution(arr) {
    for (let i = 0; i < arr.length; i ++) {
      if (arr.length % 2 === 1) {
        // 길이가 홀수라면 arr의 모든 짝수 인덱스 위치에 n을 더한 배열을
        for (let i = 1; i < arr.length; i += 2) {
          arr.replace(arr[i], arr[i] + n);
        }
      }
      else {
        // 짝수라면, arr의 모든 홀수 인덱스의 n을 더한 배열을 리턴하라
        for (let i = 0; i < arr.length; i += 2) {
          arr.replace(arr[i], arr[i] + n);
        }
      }
    }
  return arr;
}

console.log(solution()); // 