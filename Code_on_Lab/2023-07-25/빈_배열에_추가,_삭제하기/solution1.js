// https://school.programmers.co.kr/learn/courses/30/lessons/181860

//*  문제 : flag[i]가 true라면 배열 X에 arr[i] * 2번 arr[i] 요소를 추가하고, 아니라면 배열 X에 arr[i]개의 요소를 맨 뒤에서부터 제거하여 최종적으로 배열 X를 리턴하세요.

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

  for (let i = 0; i < arr.length; i++) {
    const f = flag[i] === true ? addElement : deleteElement;
    f(X, arr[i]);
  }

  return X;
}