// https://school.programmers.co.kr/learn/courses/30/lessons/131128

/*
 * 문제 : 두 정수에서 공통으로 존재하는 요소를 찾아 -> 해당 요소들로 가장 큰 수를 만들어 문자열로 리턴하라
 * 단 공통 요소가 없다면 "-1"을 리턴하라.
 */

function solution(X, Y) {
  const a = Array(10).fill(0);
  const b = Array(10).fill(0);
  [...X].forEach((v) => a[v]++);
  [...Y].forEach((v) => b[v]++);
  let arr = [];

  console.log({a, b});

  for (let i = 0; i < a.length; i++) {
    if (a[i] > 0 && b[i] > 0) {
      let n = 0;
      const min = Math.min(a[i], b[i]);
      // 결국 min만큼 반복하는 거니 for문을 쓰는게 더 좋겠음
      while (n < min) {
        arr.push(i);
        n++;
      }
    }
  }
  console.log({arr});
  const result = arr.sort((a, b) => b - a);

  if (arr.length > 0 && arr.every((x) => x === 0)) {
    return "0";
  } else if (arr.length === 0) {
    return "-1";
  } else {
    return result.sort((a, b) => b - a).join("");
  }
}

// console.log(solution("100", "2345")); // 	"-1"
// console.log(solution("100", "203045")); // "0"
// console.log(solution("100", "123450")); // "10"
// console.log(solution("12321", "42531")); // "321"
console.log(solution("5525", "1255")); // "552"
console.log(solution("3403", "13203")); // "330"
