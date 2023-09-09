// https://school.programmers.co.kr/learn/courses/30/lessons/181882

// 좀 더 보기 좋게 작성하기!

function solution(arr) {
  return arr.map((el) => {
    if (el >= 50 && el % 2 === 0) {
      return el / 2; 
    } else if (el < 50 && el % 2 === 1) {
      return el * 2;
    } else {
      return el;
    }
  })
}

console.log(solution([1, 2, 3, 100, 99, 98])); // [2, 2, 6, 50, 99, 49]