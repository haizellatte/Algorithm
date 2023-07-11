// https://school.programmers.co.kr/learn/courses/30/lessons/181841

// includes 사용 X

function solution(str_list, ex) {
  let result = "";
  for (let el of str_list) {
    if (!el.includes(ex)) {
      result += el;
    }
  }
  return result;
}

console.log(solution(["abc", "def", "ghi"], "ef")); // "abcghi"
console.log(solution(["abc", "bbc", "cbc"], "c")); // ""