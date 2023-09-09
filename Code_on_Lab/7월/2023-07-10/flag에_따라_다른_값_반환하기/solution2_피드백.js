// https://school.programmers.co.kr/learn/courses/30/lessons/181933

// 함수를 사용한다면?
function plus(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

function solution(a, b, flag) {
  const f = flag ? plus : minus;
  return f(a, b);
}
