// https://school.programmers.co.kr/learn/courses/30/lessons/181862

// 문제 : 임의의 문자열이 주어졌을 때 문자 "a", "b", "c"를 구분자로 사용해 나눈 문자열을 배열에 담아 리턴하세요.

function solution(myStr) {
  const answer = myStr.split(/[a|b|c]/).filter((x) => x);
  return answer.length > 0 ? answer : ["EMPTY"];
}

console.log(solution("baconlettucetomato")); // ["onlettu", "etom", "to"]
console.log(solution("abcd")); // ["d"]
console.log(solution("cabab")); // ["EMPTY"]