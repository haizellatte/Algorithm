// https://school.programmers.co.kr/learn/courses/30/lessons/181904

// m개씩 자르는 단계 줄이기

function solution(my_string, m, c) { 
  let answer = "";
  
  for (let i = 0; i < my_string.length ; i += m) {
    answer += my_string[i + c - 1]; // (0 + 2 - 1) = 1 --> (4 + 2 - 1) = 5 ...
  }
  return answer;
}

console.log(solution("ihrhbakrfpndopljhygc", 4, 2)); // "happy"
console.log(solution("programmers", 1, 1)); // "programmers"