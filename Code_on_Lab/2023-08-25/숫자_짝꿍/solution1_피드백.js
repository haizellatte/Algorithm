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

  for (let i = 0; i < a.length; i++) {
    if (a[i] && b[i]) { // 이 부분은 17번 if문을 0보다 크면으로 바꾸면 제거할 수 있음
      if (a[i] > 1 && b[i] > 1) {
        let n = 1;
        const min = Math.min(a[i], b[i]);
        while (n < min) {
          arr.push(i);
          n++;
        }
      }
      arr.push(i); // 여기에서 하나만 넣어주는 건 19번 줄에서 min 값으로 넣어주는 것과 같은 일!
    }
  }
  const result = arr.sort((a, b) => b - a);

  if (arr.length > 0 && arr.every((x) => x === 0)) {
    return "0";
  } else if (arr.length === 0) {
    return "-1";
  } else {
    return result.sort((a, b) => b - a).join("");
  }
}

console.log(solution("100", "2345")); // 	"-1"
console.log(solution("100", "203045")); // "0"
console.log(solution("100", "123450")); // "10"
console.log(solution("12321", "42531")); // "321"
console.log(solution("5525", "1255")); // "552"
console.log(solution("3403", "13203")); // "330"
