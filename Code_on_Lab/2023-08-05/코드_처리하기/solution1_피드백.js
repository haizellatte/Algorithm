// https://school.programmers.co.kr/learn/courses/30/lessons/181932

/*
* 문제 : 문자열 code를 앞에서부터 읽으면서 code[i]가 '1'이라면 mode를 바꿔준다. 이 작업을 반복하며 결과로 문자열 ret을 만들어 리턴하세요.

* [실행 조건]
* 0. code의 문자가 1이면 mode를 바꾼다.
* 1.  code[idx] !== '1' 일때 ret의 맨뒤에 code[idx] 추가
*  - 단 mode가 0이라면 idx % 2 === 0 일 때만
*  - 단 mode가 1이라면 idx % 2 === 1 일 때만
* 2.  code[idx] === '1' 이라면 mode를 바꾼다.
*  - mode가 0이라면 -> 1로
*  - mode가 1이라면 -> 0으로
*/

// 짝수 또는 홀수 판별
// !!! 인자에 따라서 하는 일이 달라지게 하지 말 것
function isEvenOrOdd(i, n) {
  return i % 2 === n;
}

function isEven(n) {
  return n % 2 === 0;
}

function isOdd(n) {
  return n % 2 === 1;
}

function solution(code) {
  const fs = [isEven, isOdd];
  let mode = 0;
  let ret = "";

  for (let i = 0; i < code.length; i++) {
    if (code[i] !== "1") {

      // if (mode === 0 && isEvenOrOdd(i, 0)) {
      //   ret += code[i];
      // }
      // if (mode === 1 && isEvenOrOdd(i, 1)) {
      //   ret += code[i];
      // }

      if (fs[mode](i)) {
        ret += code[i];
      }
    }

    if (code[i] === "1") {
      mode = mode === 0 ? 1 : 0;
    }
  }

  return ret.length > 0 ? ret : "EMPTY";
}

console.log(solution("abc1abc1abc")); // "acbac"
