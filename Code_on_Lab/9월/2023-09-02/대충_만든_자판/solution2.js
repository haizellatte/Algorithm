// https://school.programmers.co.kr/learn/courses/30/lessons/160586


function t(s) {
  let obj = {};
  for (let j = 0; j < s.length; j++) {
    const key = s[j];
    const k = j + 1;
    if (obj[key] === undefined) {
      obj[key] = k;
    } else {
      obj[key] = Math.min(obj[key], k);
    }
  }
  return obj;
}
// console.log(t("ABACD")); // {A: 1, B :2, C :4, D : 5}


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
  // let obj = {};
  // for (let i = 0; i < keymap.length; i++) {
  //   obj = { ...obj, ...t(keymap[i]) };
  // }

  const obj = keymap.map(x => t(x)).reduce((a, b) => ({ ...a, ...b }), {});
  // console.log(obj)

  // let answer = [];
  // for (let i = 0; i < targets.length; i++) {
  //   answer.push(f(obj, targets[i]));
  // }
  // return answer;

  return targets.map(x => f(obj, x));

}

console.log(solution(["ABACD", "BCEFD"], ["ABCD", "AABB"])); // [9, 4]
console.log(solution(["AA"], ["B"])); // [ -1 ]
console.log(solution(["AGZ", "BSSS"], ["ASA", "BGZ"])); // [4, 6]

// //* 반례 --> 안되는 target은 -1로 리턴한다. 배열 자체를  [-1]로 리턴하는 것이 아님 !!
// console.log(solution(["ABCDE"], ["FGHIJ"])); // [ -1 ]
// console.log(solution(["A"], ["A", "B"])); // [1, -1]
