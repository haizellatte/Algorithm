// https://school.programmers.co.kr/learn/courses/30/lessons/181885

//! filter 안쓰고 풀기

function solution(todo_list, finished) {
  let arr = [];

  for (let i = 0; i < todo_list.length; i++) {
    if (finished[i] === false) {
      arr.push(todo_list[i]);
    }
  }
  return arr;
}

console.log(solution(["problemsolving", "practiceguitar", "swim", "studygraph"], [true, false, true, false])); // ["practiceguitar", "studygraph"]