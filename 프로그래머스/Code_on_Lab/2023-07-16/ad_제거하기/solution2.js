// https://school.programmers.co.kr/learn/courses/30/lessons/181870

// filter 안쓰기

function solution(strArr) {
  let answer = [];
  
  for (let word of strArr) {
    if (!word.includes("ad")) {
      answer.push(word);
    }
  }
  return answer;
}

console.log(solution(["and", "notad", "abcd"])); // ["and","abcd"]
console.log(solution(["there","are","no","a","ds"])); // ["there","are","no","a","ds"]

