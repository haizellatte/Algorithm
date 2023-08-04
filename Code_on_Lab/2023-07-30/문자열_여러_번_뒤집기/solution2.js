// https://school.programmers.co.kr/learn/courses/30/lessons/181913#

// 문제 : 2차원 배열 queries가 각 [s, e] 형태로 주어질 때, my_string의 인덱스 s부터 인덱스 e까지를 뒤집어 처리한 문자열을 리턴하세요.

// 문자열을 복사할 필요가 없었다 !

function solution(my_string, queries) {
  const str = my_string.split('');

  queries.forEach(([s, e]) => {
    const reverseStr = [...str.slice(s, e + 1)].reverse();
    str.splice(s, reverseStr.length, ...reverseStr);
  });

  return str.join('');
}

console.log(
  solution("rermgorpsam", [
    [2, 3],
    [0, 7],
    [5, 9],
    [6, 10],
  ])
); // "programmers"
console.log(solution("abab", [[2, 3]])); // 	"abba"

// splice 참고 자료 : https://www.freecodecamp.org/korean/news/javascript-splice-method/
