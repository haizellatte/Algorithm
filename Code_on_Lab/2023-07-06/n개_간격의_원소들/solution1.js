// https://school.programmers.co.kr/learn/courses/30/lessons/181888

function solution(num_list, n) {
  let answer =[];
      for (let i = 0; i < num_list.length; i+=n) {
          answer.push(num_list[i]);
      }
      return answer;
  }

console.log(solution([4, 2, 6, 1, 7, 6], 2)); // [4, 6, 7] 