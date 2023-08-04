// https://school.programmers.co.kr/learn/courses/30/lessons/181924

// 문제 : queries의 각 원소는 하나의 query를 나타내며 [i,j]꼴입니다. 이때 arr[i]의 값과 arr[j]의 값의 위치를 바꾸어 모든 query 배열이 반영된 arr를 리턴하세요.

function solution(arr, queries) {
  queries.map(([i, j]) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  });
  return arr;
}

console.log(solution([0, 1, 2, 3, 4], [([0, 3], [1, 2], [1, 4])])); // [3, 4, 1, 0, 2]
