// https://school.programmers.co.kr/learn/courses/30/lessons/181914

function solution(number) {
  let answer = 0;
      for(let i of number) {
          answer += Number(i);
      }
      return answer % 9;
  }

console.log(solution("123")); // 6
console.log(solution("78720646226947352489")); // 2