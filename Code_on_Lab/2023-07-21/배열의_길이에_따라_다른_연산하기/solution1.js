// https://school.programmers.co.kr/learn/courses/30/lessons/181854

function solution(arr, n) {
  // arr길이가 짝수라면 모든 홀수 인덱스 위치에 n을 더한 배열을 리턴
  if (arr.length % 2 === 0) {
    return arr.map((el, idx) => (idx % 2 === 1) ? el + n : el);
  } else {
    return arr.map((el, idx) => (idx % 2 === 0) ? el + n : el);
  }
}

console.log(solution([49, 12, 100, 276, 33], 27)); // [76, 12, 127, 276, 60]
console.log(solution([444, 555, 666, 777], 100)); // [444, 655, 666, 877]