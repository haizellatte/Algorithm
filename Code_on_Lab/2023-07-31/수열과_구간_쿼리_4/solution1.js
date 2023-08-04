// https://school.programmers.co.kr/learn/courses/30/lessons/181922

/* [문제]
 * 1. queries의 원소는 각각 query를 나타내며, [s, e, k] 꼴이다.
 * 2. arr[i]에 대해 1) s ≤ i ≤ e이고 2) i가 k의 배수이면 arr[i]에 1을 더한다.(여기서 i는 index)
 * 3. 위 규칙을 적용한 arr 배열을 리턴하세요.
 */

// 조건 1 확인
function checkI(s, e, i) {
  return s <= i && i <= e;
}

// 조건 2 확인
function checkMultiple(i, k) {
  return i % k === 0;
}

function solution(arr, queries) {
  arr.map((_, i) => {
    queries.map(([s, e, k]) => {
      if (checkI(s, e, i) && checkMultiple(i, k)) {
        arr[i] += 1;
      }
    });
  });
  return arr;
}

console.log(
  solution(
    [0, 1, 2, 4, 3],
    [
      [0, 4, 1],
      [0, 3, 2],
      [0, 3, 3],
    ]
  )
); // 	[3, 2, 4, 6, 4]
