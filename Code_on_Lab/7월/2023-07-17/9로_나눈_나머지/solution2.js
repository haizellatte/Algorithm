// https://school.programmers.co.kr/learn/courses/30/lessons/181914

// reduce 활용하기

function solution(number) {
  let answer = [...number].reduce((a, b) => a + Number(b), 0);

  return answer % 9;
}

console.log(solution("123")); // 6
console.log(solution("78720646226947352489")); // 2