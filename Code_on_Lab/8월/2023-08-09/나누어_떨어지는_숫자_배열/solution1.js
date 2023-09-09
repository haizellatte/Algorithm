// https://school.programmers.co.kr/learn/courses/30/lessons/12910

function solution(arr, divisor) {
  const divisorArr = arr.filter((v) => v % divisor === 0).sort((a, b) => a - b);

  return divisorArr.length > 0 ? divisorArr : [-1];
}

console.log(solution([5, 9, 7, 10], 5)); // [5, 10]
console.log(solution([2, 36, 1, 3], 1)) // [1, 2, 3, 36]
console.log(solution([3, 2, 6], 10)); //[-1]