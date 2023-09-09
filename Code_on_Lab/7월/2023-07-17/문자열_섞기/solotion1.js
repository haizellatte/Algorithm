// https://school.programmers.co.kr/learn/courses/30/lessons/181942

function solution(str1, str2) {
  let result = "";
  
  for (let i = 0; i < str1.length; i++) {
    result += str1[i];
    result += str2[i];
  } 
  return result;
}

console.log(solution("aaaaa", "bbbbb")); // "ababababab"