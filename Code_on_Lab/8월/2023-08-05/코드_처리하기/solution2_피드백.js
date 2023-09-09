// https://school.programmers.co.kr/learn/courses/30/lessons/181932

// 짝수 또는 홀수 판별
function isEvenOrOdd(i, n) {
  return i % 2 === n;
}

// mode를 확인해 code 반환
function checkMode(c, i, mode) {
  return isEvenOrOdd(i, mode) ? c : '';
}

function solution(code) {
  let mode = 0;
  let ret = "";

  for (let i = 0; i < code.length; i++) {
    if (code[i] !== "1") {
      ret += checkMode(code[i], i, mode);
    }
    if (code[i] === "1") {
      mode = mode === 0 ? 1 : 0;
    }
  }
  
  return ret.length > 0 ? ret : "EMPTY";
}

console.log(solution("abc1abc1abc")); // "acbac"
