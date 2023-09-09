// https://school.programmers.co.kr/learn/courses/30/lessons/181903

// for 반복문 -> 고차함수 filter로 바꾸기

function solution(q, r, code) {  
  return [...code].filter((el, i) => i % q == r ? el : "").join("");
}

console.log(solution(3, 1, "qjnwezgrpirldywt")); // "jerry"
console.log(solution(1, 0, "programmers")); // "programmers"