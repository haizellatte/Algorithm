// https://school.programmers.co.kr/learn/courses/30/lessons/161989

/*
* [아이디어 노트]
* 시작점을 0으로 두고, 각 구역을 돌면서 구역이 시작점보다 크면 횟수를 1회 더하고, 시작점을 옮긴다.
*/

function solution(n, m, section) {
  let painting = 0;
  let start = 0;
  
  section.forEach(s => {
    if (start < s) {
      painting++;
      start = s + m - 1;
    }
  })
    
  return painting;
}

console.log(solution(8, 4, [2, 3, 6])); // 2
console.log(solution(5, 4, [1, 3])); // 1
console.log(solution(4, 1, [1, 2, 3, 4])); // 4