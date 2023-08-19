// https://school.programmers.co.kr/learn/courses/30/lessons/12935

function solution(arr) {
  const minN = Math.min(...arr);
  const deleteMin = arr.filter(v => v !== minN);
  return deleteMin.length > 0 ? deleteMin : [-1];
}

console.log(solution([4,3,2,1])); // [4,3,2]
console.log(solution([10])); // [-1]