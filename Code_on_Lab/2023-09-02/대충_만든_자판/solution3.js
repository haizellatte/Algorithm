// https://school.programmers.co.kr/learn/courses/30/lessons/160586

function t(s) {
  return [...s].reduce((acc, cur, i) => {
    acc[cur] = acc[cur] === undefined ? i + 1 : Math.min(acc[cur], i + 1);
    return acc;
  }, {});
}
console.log(t("ABACD")); // {A: 1, B :2, C :4, D : 5}

function f(obj, s) {
  let count = 0;
  for (let j = 0; j < s.length; j++) {
    const key = s[j];
    if (obj[key] === undefined) {
      count = -1;
      break;
    }
    count += obj[key];  
  }
  return count;
}

function solution(keymap, targets) {
  const obj = keymap.map(x => t(x)).reduce((a, b) => ({ ...a, ...b }), {});
  return targets.map(x => f(obj, x));
}

console.log(solution(["ABACD", "BCEFD"], ["ABCD", "AABB"])); // [9, 4]
console.log(solution(["AA"], ["B"])); // [ -1 ]
console.log(solution(["AGZ", "BSSS"], ["ASA", "BGZ"])); // [4, 6]

// //* 반례 --> 안되는 target은 -1로 리턴한다. 배열 자체를  [-1]로 리턴하는 것이 아님 !!
// console.log(solution(["ABCDE"], ["FGHIJ"])); // [ -1 ]
// console.log(solution(["A"], ["A", "B"])); // [1, -1]
