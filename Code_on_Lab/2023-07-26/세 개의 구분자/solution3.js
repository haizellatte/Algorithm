// https://school.programmers.co.kr/learn/courses/30/lessons/181862

// 문제 : 임의의 문자열이 주어졌을 때 문자 "a", "b", "c"를 구분자로 사용해 나눈 문자열을 배열에 담아 리턴하세요.

// 🤔 정규표현식을 사용하거나 split과 join을 반복하는 방법 외에 다른 방법이 있을까요 ??

function splitWord(s, a, b) {
  return b ? s.split(a).join(b) : s.split(a).filter(x => x);
}

function solution(s) {
  const splitA = splitWord(s, 'a', 'b');
  const splitB = splitWord(splitA, 'b', 'c');
  const splitC = splitWord(splitB, 'c');
    
  return splitC.length > 0 ? splitC : ["EMPTY"];
}

console.log(solution("baconlettucetomato")); // ["onlettu", "etom", "to"]
console.log(solution("abcd")); // ["d"]
console.log(solution("cabab")); // ["EMPTY"]