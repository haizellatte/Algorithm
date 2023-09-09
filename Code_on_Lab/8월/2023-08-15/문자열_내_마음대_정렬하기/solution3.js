// https://school.programmers.co.kr/learn/courses/30/lessons/12915

/*
* MDN에서 sort에 대해 찾아보다가, 문자열과 문자열을 비교하는 함수, localeCompare에 대해 알게 되었다.

? localeCompare
* : 문자열과 문자열을 비교하는 메서드 
* 문법 : referenceStr(참조문자열).localeCompare(compareString(비교문자열))
* --> referenceStr이 compareString보다 앞에 있으면 -1, 뒤에 있으면 1, 같으면 0 반환한다.
* 예제 )
* 'a'.localeCompare('b') // -1 
* 'b'.localeCompare('a') // 1
* 'c'.localeCompare('c') // 0
* MDN : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
*/

const compareWord = (a, b, n) => {
  // 1. n자리가 같을 시 전체 단어를 비교
  if (a[n] === b[n]) {
    return a.localeCompare(b)
  }
  // 2. 아니라면 각 단어의 n자리 비교
  return a[n].localeCompare(b[n])
}

function solution(strings, n) {
  strings.sort((a, b) => compareWord(a, b, n));
  return strings;
}

console.log(solution(["sun", "bed", "car"], 1)); // ["car", "bed", "sun"]
console.log(solution(["abce", "abcd", "cdx"], 2)); // ["abcd", "abce", "cdx"]
