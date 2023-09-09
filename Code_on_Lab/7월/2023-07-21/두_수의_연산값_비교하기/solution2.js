// https://school.programmers.co.kr/learn/courses/30/lessons/181938

// 함수 -> 변수로 바꾸기



function solution(a, b) {
  const stickNum = Number(String(a) + b);
  const twoByNum = 2 * a * b;

  return stickNum > twoByNum ? stickNum : twoByNum;
}

console.log(solution(2, 91)); // 364 
console.log(solution(91, 2)); // 912