// https://school.programmers.co.kr/learn/courses/30/lessons/77484#fnref1

function solution(lottos, win_nums) {
  const minPoint = lottos.filter((l) => win_nums.includes(l)).length;
  const zero = lottos.filter((l) => l === 0).length;
  const ranking = [6, 6, 5, 4, 3, 2, 1];

  return [ranking[minPoint+zero], ranking[minPoint]];
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])); // [3, 5]
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25])); // [1, 6]
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35])); // [1, 1]