// https://school.programmers.co.kr/learn/courses/30/lessons/181851?language=javascript

/*
[아이디어 노트]
1. rank를 탐색하면서 rank의 idx에 맞는 attendance[idx] === true인 애들의 등수 값과 idx를 새로운 배열 arr에 객체 형태로 담는다.
2. arr를 등수 값을 기준으로 오름차순 정렬한다.
3. 그 후 앞에서부터 요소 3개를 꺼내 연산한 값을 리턴한다.
*/

// rank filter -> arr push -> sort 과정 단축하기 => map을 통해 !

function answer(a, b, c) {
  return a * 10000 + b * 100 + c;
}

function solution(rank, attendance) {
  // filter + arr.push + sort 과정 단축
  const arr = rank.map((el, idx) => [el, idx]).filter((_, idx) => attendance[idx]).sort((a, b) => a[0] - b[0]);
  
  return answer(arr[0][1], arr[1][1], arr[2][1]);
}

console.log(solution([3, 7, 2, 5, 4, 6, 1], [false, true, true, true, true, false, false])); // 20403

console.log(solution([1, 2, 3], [true, true, true])); // 102
console.log(solution([6, 1, 5, 2, 3, 4], [true, false, true, false, false, true])); // 50200