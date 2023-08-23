// https://school.programmers.co.kr/learn/courses/30/lessons/135808

// 고차함수로 풀기 !

// 한 상자의 가격을 측정하는 함수
function price(arr, m) {
  let min = Math.min(...arr);
  return Number(min * m);
}

function solution(k, m, score) {
  score.sort((a, b) => b - a);
  let result = 0;

  score.forEach((_, i) => {
    // m개씩 box를 만든다.
    if (i % m === 0) {
      const box = score.slice(i, i + m);

      if (box.length === m) {
        result += price(box, m);
      }
    }
  });

  return result;
}

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1])); // 8
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2])); // 33 