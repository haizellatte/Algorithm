// https://school.programmers.co.kr/learn/courses/30/lessons/181870

// includes 안쓰기
// ad의 인덱스 위치가 -1인것만 추려 리턴한다.

function solution(strArr) {
  let answer = strArr.filter((word) => word.indexOf("ad") === -1);
  
  return answer;
}

console.log(solution(["and", "notad", "abcd"])); // ["and","abcd"]
console.log(solution(["there","are","no","a","ds"])); // ["there","are","no","a","ds"]

