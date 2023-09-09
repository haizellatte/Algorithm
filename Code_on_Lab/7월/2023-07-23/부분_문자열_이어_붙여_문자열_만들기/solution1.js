// https://school.programmers.co.kr/learn/courses/30/lessons/181911


// [문제] my_strings[i].slice(parts[i][0], parts[i][1] + 1)한 문자열을 순서대로 이어 붙인 문자열을 리턴하여라.

function solution(my_strings, parts) {
  let result = "";
    
  for (let i = 0; i < my_strings.length; i++) {
    result += my_strings[i].slice(parts[i][0], parts[i][1] + 1);
  }
    
  return result;
}

console.log(solution(["progressive", "hamburger", "hammer", "ahocorasick"], [[0, 4], [1, 2], [3, 5], [7, 7]])); // "programmers"