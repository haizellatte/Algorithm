// https://school.programmers.co.kr/learn/courses/30/lessons/181885

function solution(todo_list, finished) {
  let result = todo_list.filter((el, idx) => finished[idx] === false);
  return result;
};

console.log(solution(
    ["problemsolving", "practiceguitar", "swim", "studygraph"],
    [true, false, true, false])); // ["practiceguitar", "studygraph"]