// https://school.programmers.co.kr/learn/courses/30/lessons/135808

/*
* [문제의 keyPoint]
* 1. score을 내림차순으로 정렬한다.
* 2. 반복문을 통해 m개 만큼(i % m == 0) 각각의 box를 만든다.
*/

// 한 상자의 가격을 측정하는 함수
function price(arr, m) {
  let min = Math.min(...arr);
  return Number(min * m);
}

function solution(k, m, score) {
  score.sort((a, b) => b - a);
  let result = 0;

  for (let i = 0; i < score.length; i++) {
    // m개씩 box를 만든다.
    if (i % m == 0) {
      const box = score.slice(i, i + m);

      if (box.length === m) {
        result += price(box, m);
      }
    }
  }

  return result;
}

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1])); // 8
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2])); // 33
