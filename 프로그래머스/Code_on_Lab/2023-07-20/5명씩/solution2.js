// https://school.programmers.co.kr/learn/courses/30/lessons/181886

// filter의 인덱스 이용하기

function solution(names) {
  return names.filter((_, i) => i % 5 === 0);
}

console.log(solution(["nami", "ahri", "jayce", "garen", "ivern", "vex", "jinx"])); // ["nami", "vex"]