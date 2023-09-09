// https://school.programmers.co.kr/learn/courses/30/lessons/12915
// ! [MDN - sort](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

function solution(strings, n) {
  strings.sort((a, b) => {
    // 1. 각 단어의 n자리 비교
    if (a[n] > b[n]) {
      return 1;
    }

    if (a[n] < b[n]) {
      return -1;
    } else { // 2. n자리가 같을 시 전체 단어를 비교
      return a > b ? 1 : -1;
    }
  });
  return strings;
}

// console.log(solution(["sun", "bed", "car"], 1)); // ["car", "bed", "sun"]
// console.log(solution(["abce", "abcd", "cdx"], 2)); // ["abcd", "abce", "cdx"]

// 1, 2 => 1 - 2 = -1
// 2, 1 => 2 - 1 = 1

// console.log([1, 2, 3, 4, 5, 65, 6].sort(() => Math.random() * 0.5 + -0.2));