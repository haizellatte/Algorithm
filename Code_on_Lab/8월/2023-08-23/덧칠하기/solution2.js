// https://school.programmers.co.kr/learn/courses/30/lessons/161989

//* for문으로 풀기

function solution(n, m, section) {
  let painting = 0;
  let start = 0;

  for (let i = 0; i < section.length; i++) {
    if (start < section[i]) {
      painting++;
      start = section[i] + m - 1;
    }
  }
    
  return painting;
}

console.log(solution(8, 4, [2, 3, 6])); // 2
console.log(solution(5, 4, [1, 3])); // 1
console.log(solution(4, 1, [1, 2, 3, 4])); // 4