// https://school.programmers.co.kr/learn/courses/30/lessons/86051

function solution(numbers) {
  const n = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return n
    .map((v, i) => {
      if (!numbers.includes(v)) {
        return v;
      }
    })
    .filter((v) => v >= 0)
    .reduce((a, b) => a + b);
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0])); // 14
console.log(solution([5, 8, 4, 0, 6, 7, 9])); // 6