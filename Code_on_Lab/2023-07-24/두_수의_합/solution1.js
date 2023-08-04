// https://school.programmers.co.kr/learn/courses/30/lessons/181846

/*
* [Number로는 통과되지 않는 이유]
* 자바스크립트의 기본 자료형의 수는 한계점이 존재한다.
* 따라서 'Number.MAX_SAFE_INTEGER의 값'보다 큰 경우 제대로 연산되지 않을 수 있다.
* 이때 BigInt를 사용해 문제를 해결할 수 있다.
* [BigInt]
* : Number 원시 값이 안정적으로 나타낼 수 있는 최대치인 2^53 - 1보다 큰 정수를 표현할 수 있는 내장 객체이다.
*/

function solution(a, b) {
  const answer = BigInt(a) + BigInt(b);
  return answer.toString();
}

console.log(solution("582", "734")); // "1316"
console.log(solution("18446744073709551615", "287346502836570928366")); // "305793246910280479981"