// https://school.programmers.co.kr/learn/courses/30/lessons/181833

function solution(n) {
  let arr = [];

  for (let i = 0; i < n; i++) {
    const temp = Array(n).fill(0);
    temp[i] = 1;
    arr.push(temp);   
  }
  return arr;
}

console.log(solution(3)); // [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
console.log(solution(6)); // [[1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1]]
console.log(solution(1)); // [[1]]