// https://school.programmers.co.kr/learn/courses/30/lessons/181840

function solution(num, n) {
  if (num.includes(n)) {
      return 1;
  } else {
      return 0;
  }
}

console.log(solution([1, 2, 3, 4, 5],	3)); //1 
console.log(solution([15, 98, 23, 2, 15],	20)); //0 