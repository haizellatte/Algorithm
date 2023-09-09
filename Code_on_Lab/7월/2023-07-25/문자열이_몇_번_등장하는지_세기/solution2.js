// https://school.programmers.co.kr/learn/courses/30/lessons/181871
// 문제 : 문자열 myString에서 pat이 등장하는 횟수를 리턴하세요.

/*
* [아이디어 노트]
* 반복문을 돌면서 myString.slice(i, i + pat.length)과 pat이 같다면 cnt++한다.
*/

function solution(myString, pat) {
  let cnt = 0;
  for (let i = 0; i < myString.length; i++) {
    if (myString.slice(i, i + pat.length) === pat) {
      cnt++;
    }
  }
  return cnt;
  }


console.log(solution("banana", "ana")) // 2
console.log(solution("aaaa", "aa")) // 3
console.log(solution("baa", "aa")) // 1
console.log(solution("abab", "aa")) // 0