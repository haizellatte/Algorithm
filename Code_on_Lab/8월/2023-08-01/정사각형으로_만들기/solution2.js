// https://school.programmers.co.kr/learn/courses/30/lessons/181830#

// 문제 : 2차원 배열 arr에 대해 1) 행과 열의 수가 같아지도록 각 행과 열에 끝에 0을 추가한 이차원 배열을 리턴하세요.

// 하는 일 묶기
  function addEl(s, e, f) {
    for (let k = s; k < e; k++) {
      f();
    }
  }

function solution(arr) {
  let rows = arr.length;
  let columns = arr[0].length;

  // 행 > 열
  if (rows > columns) {
    // arr[i]에 대해
    for (let i = 0; i < rows; i++) {
      // 행-열의 차이만큼 반복
      addEl(columns, rows, () => arr[i].push(0));
    }
  }

  // 행 < 열
  if (rows < columns) {
    addEl(rows, columns, () => arr.push(Array(columns).fill(0)));
  }

  return arr;
}

console.log(
  solution([
    [572, 22, 37],
    [287, 726, 384],
    [85, 137, 292],
    [487, 13, 876],
  ])
); // 	[[572, 22, 37, 0], [287, 726, 384, 0], [85, 137, 292, 0], [487, 13, 876, 0]]
console.log(
  solution([
    [57, 192, 534, 2],
    [9, 345, 192, 999],
  ])
); // [[57, 192, 534, 2], [9, 345, 192, 999], [0, 0, 0, 0], [0, 0, 0, 0]]
console.log(
  solution([
    [1, 2],
    [3, 4],
  ])
); // 	[[1, 2], [3, 4]]

// ! 반례
console.log(
  solution([
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
  ])
); // [[1, 1, 0, 0], [1, 1, 0, 0], [1, 1, 0, 0], [1, 1, 0, 0]]
console.log(
  solution([
    [1, 1, 1],
    [1, 1, 1],
  ])
); // [[1, 1, 1], [1, 1, 1], [0, 0, 0]]
