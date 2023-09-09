// https://school.programmers.co.kr/learn/courses/30/lessons/181838

/* 각 요소를 join하여 숫자로 비교하기 */

function solution(date1, date2) {
  return date1.join('') - date2.join('') < 0 ? 1 : 0;
}

console.log(solution([2021, 12, 28], [2021, 12, 29])); // 1
console.log(solution([1024, 10, 24]	, [1024, 10, 24])); // 0