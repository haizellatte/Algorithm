// https://school.programmers.co.kr/learn/courses/30/lessons/142086

function solution(s) {
  let answer = [-1];

  for (let i = 1; i < s.length; i++) {
    const range = s.slice(0, i);
    const lastIdx = range.lastIndexOf(s[i]);
    // console.log({range, lastIdx, 's[i]': s[i]});
    answer.push(lastIdx === -1 ? lastIdx : i - lastIdx);
  }

  return answer;
}

console.log(solution("banana")); // [-1, -1, -1, 2, 2, 2]
// console.log(solution("foobar")); // [-1, -1, 1, -1, -1, -1]
