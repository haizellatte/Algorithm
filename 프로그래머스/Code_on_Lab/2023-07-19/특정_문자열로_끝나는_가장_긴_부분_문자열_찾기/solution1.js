// https://school.programmers.co.kr/learn/courses/30/lessons/181872

/*
* [아이디어 노트]
1. lastIndexOf를 통해 마지막 pat의 인덱스를 구한다.
2. 'dE' 처럼 길이가 1이상일 수 있기 때문에 (n + pat.length)까지 구한다.
*/

function solution(myString, pat) {
  const n = myString.lastIndexOf(pat);
  return myString.slice(0, n + pat.length);
}

console.log(solution("AbCdEFG", "dE")); // "AbCdE"
console.log(solution("AAAAaaaa", "a")); // "AAAAaaaa"