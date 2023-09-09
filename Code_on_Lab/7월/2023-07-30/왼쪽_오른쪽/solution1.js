// https://school.programmers.co.kr/learn/courses/30/lessons/181890

/*
* [문제]
1. 'l'이 먼저 나온다면 --> l을 기준으로 왼쪽에 있는 요소를 담아 리턴
2. 'r'이 먼저 나온다면 --> r을 기준으로 오른쪽에 있는 요소를 담아 리턴
3. 둘 다 없다면 --> 빈 문자열 리턴
*/

function solution(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "l") {
      return str.slice(0, i);
    }
    if (str[i] === "r") {
      return str.slice(i + 1);
    }
  }
  // l, r 둘다 없으면 빈배열 리턴
  return [];
}

console.log(solution(["u", "u", "l", "r"])); // ["u", "u"]
console.log(solution(["l"])); // []
