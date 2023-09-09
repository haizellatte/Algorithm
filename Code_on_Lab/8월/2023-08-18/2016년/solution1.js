// https://school.programmers.co.kr/learn/courses/30/lessons/12901#

/*
* [아이디어 노트]
* 1. (a-1)월까지 for문을 놀려 해당 월의 일수를 누적해서 더한다.
* -> days += months[k];
* 2. a월은 days에 b만큼 더한다.
* -> days += b;
* 3. 1월 1일 부터 ~ a월 b일까지의 모든 일수를 더한 days를 7일로 나누고
* -> days %= 7;
* 4. 구한 몫을 weeks의 index로 삼아 답을 리턴한다.
* -> return weeks[몫]
*/

function solution(a, b) {
  const weeks = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  const months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let days = 0;

  for (let i = 0; i < a - 1; i++) {
    days += months[i];
  }
  days += b;
  const today = days %= 7; 
  return today > 0 ? weeks[days - 1] : weeks[weeks.length - 1];
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