// https://school.programmers.co.kr/learn/courses/30/lessons/181921

// 문제 l 이상 r 이하의 정수 중에서 숫자 0과 5로만 이루어진 모든 정수를 오름차순으로 정렬한 배열을 리턴하세요.

function solution(l, r) {
  let result = [];

  for (let i = l; i <= r; i++) {
    // 숫자로는 5나 0이 들어있는지 확인하기 어렵기 때문에 문자 타입으로 변환한다.
    const strI = String(i);
    // 조건 : strI을 배열로 만들어 각 요소들이 5또는 0으로만 이루어져 있는지 확인하여 맞다면 result에 추가한다.
    if ([...strI].every((x) => x === "5" || x === "0")) {
      result.push(i);
    }
  }

  return result.length > 0 ? result : [-1];
}

console.log(solution(5, 555)); // [5, 50, 55, 500, 505, 550, 555]
console.log(solution(10, 20)); // [-1]
