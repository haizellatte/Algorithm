// https://school.programmers.co.kr/learn/courses/30/lessons/160586

function pushKeypad(keymap, c) {
  return keymap
    .map((k) => k.indexOf(c) + 1)
    .sort((a, b) => a - b)
    .filter((v) => v > 0)[0];
}

function solution(keymap, targets) {
  let answer = [];

  for (let i = 0; i < targets.length; i++) {
    let count = 0;
    for (let j = 0; j < targets[i].length; j++) {
      count += pushKeypad(keymap, targets[i][j]);
    }
    answer.push(count);
  }

  return answer.map((a) => (!isNaN(a) ? a : -1));
}

console.log(solution(["ABACD", "BCEFD"], ["ABCD", "AABB"])); // [9, 4]
console.log(solution(["AA"], ["B"])); // [ -1 ]
console.log(solution(["AGZ", "BSSS"], ["ASA", "BGZ"])); // [4, 6]

//* 반례 --> 안되는 target은 -1로 리턴한다. 배열 자체를  [-1]로 리턴하는 것이 아님 !!
console.log(solution(["ABCDE"], ["FGHIJ"])); // [ -1 ]
console.log(solution(["A"], ["A", "B"])); // [1, -1]
