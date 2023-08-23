// https://school.programmers.co.kr/learn/courses/30/lessons/12901#

//! 좀 더 개선 !

function solution(a, b) {
  //* 1일이 FRI니까 0일인 THU부터 나열한다.
  const weeks = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
  const months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  //* days에 b먼저 더해준다.
  let days = b;

  for (let i = 0; i < a - 1; i++) {
    days += months[i];
  }
  return weeks[days % 7];
}

console.log(solution(1, 10)); // 'SUN'
console.log(solution(5, 24)); // "TUE"
console.log(solution(6, 13)); // "MON" 
console.log(solution(4, 1)); // "FRI"
console.log(solution(4, 4)); // "MON"
// 테스트 케이스 9, 13 반례 --> days %= 7가 0이면 (0-1)은 undefined가 된다.
console.log(solution(5, 5)); // "THU"
console.log(solution(5, 26)); // "THU"
console.log(solution(9, 29)); // "THU"