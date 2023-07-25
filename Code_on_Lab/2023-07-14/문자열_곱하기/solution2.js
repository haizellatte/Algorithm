// https://school.programmers.co.kr/learn/courses/30/lessons/181940

// repeat 안쓰기

function solution(my_string, k) {
  let answer = "";
    for (let i = 0; i < k; i++) {
      answer += my_string;
    }
    return answer;
  }

console.log(solution("string", 3)); // "stringstringstring" 
console.log(solution("love",	10)); // "lovelovelovelovelovelovelovelovelovelove"