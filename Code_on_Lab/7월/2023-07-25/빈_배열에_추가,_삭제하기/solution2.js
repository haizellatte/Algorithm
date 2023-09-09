// https://school.programmers.co.kr/learn/courses/30/lessons/181860

//* 문제 : flag[i]가 true라면 배열 X에 arr[i] * 2번 arr[i] 요소를 추가하고, 아니라면 배열 X에 arr[i]개의 요소를 맨 뒤에서부터 제거하여 최종적으로 배열 X를 리턴하세요.

//*  map 활용하기

function addElement(arr, el) {
  for (let i = 0; i < el * 2; i++) {
    arr.push(el);
  }
}

function deleteElement(arr, el) {
  for (let i = 0; i < el; i++) {
    arr.pop();
  }
}

function solution(arr, flag) {
  let X = [];
  arr.map((v, i) => flag[i] === true ? addElement(X, v) : deleteElement(X, v));
  return X;
}

console.log(solution([3, 2, 4, 1, 3], [true, false, true, false, false])); // [3, 3, 3, 3, 4, 4, 4, 4]