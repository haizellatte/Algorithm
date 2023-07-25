// https://school.programmers.co.kr/learn/courses/30/lessons/181938

function stickNum(a, b) {
  let num = String(a) + String(b);
  return Number(num);
}

function twoByNum(a, b) {
  return 2 * a * b;
}

function solution(a, b) {
  if (stickNum(a, b) === twoByNum(a, b)) {
    return stickNum(a, b);
  } else {
    return stickNum(a, b) > twoByNum(a, b) ? stickNum(a, b) : twoByNum(a, b);
  }
}

console.log(solution(2, 91)); // 364 
console.log(solution(91, 2)); // 912