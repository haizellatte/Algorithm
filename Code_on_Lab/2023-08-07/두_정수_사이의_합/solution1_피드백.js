// https://school.programmers.co.kr/learn/courses/30/lessons/12912

// ! 나쁜 예

function solution(a, b) {
  let result = 0;

  if (a > b) {
    for (let i = b; i <= a; i++) {
      result += i;
    }
  } else {
    for (let i = a; i <= b; i++) {
      result += i;
    }
  }

  return result;
}

console.log(solution(3, 5, 12)) // 12
console.log(solution(3, 3, 3)) // 3
console.log(solution(5, 3, 12)) // 12