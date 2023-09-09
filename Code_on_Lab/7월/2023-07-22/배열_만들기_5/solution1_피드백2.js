// https://school.programmers.co.kr/learn/courses/30/lessons/181912

function solution(intStrs, k, s, l) {
  return intStrs
      .map((num) => parseInt(num.slice(s, s+l), 10))
      .filter((el) => el > k);
}

console.log(solution(["0123456789","9876543210","9999999999999"], 50000, 5, 5)); // [56789, 99999]