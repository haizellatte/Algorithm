// https://school.programmers.co.kr/learn/courses/30/lessons/181870

function solution(strArr) {
  let sorted = strArr.filter((el) => !el.includes("ad"));
    
  return sorted;
};

console.log(solution(["and", "notad", "abcd"])); // ["and","abcd"]
console.log(solution(["there","are","no","a","ds"])); // ["there","are","no","a","ds"]

