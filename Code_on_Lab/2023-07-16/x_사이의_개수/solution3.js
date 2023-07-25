// https://school.programmers.co.kr/learn/courses/30/lessons/181867

// split + map 이용하기

function solution(myString) {
  let answer = myString.split('x').map(el => el.length);

  return answer;
}

console.log(solution("oxooxoxxox")); // [1, 2, 1, 0, 1, 0]
console.log(solution("xabcxdefxghi")); // [0, 3, 3, 3]