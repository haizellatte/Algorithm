// https://school.programmers.co.kr/learn/courses/30/lessons/181871

// 문제 : 문자열 myString에서 pat이 등장하는 횟수를 리턴하세요.

// !테스트 케이스는 통과되지만, 채점 결과 53% 통과됨 

/*
* [아이디어 노트]
* 2. myString.includes(pat)라면 cnt++;
* 3. 반복문을 돌면서 slice(0, i).indexOf(pat)의 indexOf와 lastIndexOf가 다르다면 cnt++;
*/

function solution(myString, pat) {
  let cnt = 0;

  if (myString.includes(pat)) {
    cnt++;
  }

  for (let i = 1; i <= myString.length; i++) {
    const word = myString.slice(0, i);
    if (word.indexOf(pat) !== word.lastIndexOf(pat)) {
      cnt++;
    }
  }
  return cnt;
}


console.log(solution("banana", "ana")) // 2
console.log(solution("aaaa", "aa")) // 3
console.log(solution("baa", "aa")) // 1
console.log(solution("abab", "aa")) // 0