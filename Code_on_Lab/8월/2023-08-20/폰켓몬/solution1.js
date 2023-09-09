// https://school.programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
  const max = nums.length / 2;
  const arr = nums.filter((x, i) => nums.indexOf(x) === i).length;

  return max < arr ? max : arr;
}

console.log(solution([3, 1, 2, 3])); // 2
console.log(solution([3, 3, 3, 2, 2, 4])); // 3
console.log(solution([3, 3, 3, 2, 2, 2])); // 2