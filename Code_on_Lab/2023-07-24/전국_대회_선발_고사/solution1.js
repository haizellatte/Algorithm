// https://school.programmers.co.kr/learn/courses/30/lessons/181851?language=javascript

/*
[아이디어 노트]
1. rank를 탐색하면서 rank의 idx에 맞는 attendance[idx] === true인 애들의 등수 값과 idx를 새로운 배열 arr에 객체 형태로 담는다.
2. arr를 등수 값을 기준으로 오름차순 정렬한다.
3. 그 후 앞에서부터 요소 3개를 꺼내 연산한 값을 리턴한다.
*/

function answer(a, b, c) {
  return a * 10000 + b * 100 + c;
}

function solution(rank, attendance) {
  let arr = [];
  rank.filter((el, idx) => attendance[idx] === true ? arr.push({value: el, idx: idx }) : "");
  arr.sort((a,b) => a.value - b.value);
  
  return answer(arr[0].idx, arr[1].idx, arr[2].idx);
}

console.log(solution([3, 7, 2, 5, 4, 6, 1], [false, true, true, true, true, false, false])); // 20403

console.log(solution([1, 2, 3], [true, true, true])); // 102
console.log(solution([6, 1, 5, 2, 3, 4], [true, false, true, false, false, true])); // 50200