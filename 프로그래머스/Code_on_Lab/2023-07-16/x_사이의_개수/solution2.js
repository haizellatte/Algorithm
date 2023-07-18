// https://school.programmers.co.kr/learn/courses/30/lessons/181867

// split 이용하기

function solution(myString) {
  let answer = [];
  let arr = myString.split('x');

  for (let word of arr) {
    answer.push(word.length);
  }
  
  return answer;
}

console.log(solution("oxooxoxxox")); // [1, 2, 1, 0, 1, 0]
console.log(solution("xabcxdefxghi")); // [0, 3, 3, 3]