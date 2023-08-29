// https://school.programmers.co.kr/learn/courses/30/lessons/140108

//* x와 x가 아닌 다른 글자들의 나온 횟수를 각각 세는 함수
const otherWords = (s) => {
  const arr = [...s];
  let x = arr[0];
  let xCnt = 1;
  let notXCnt = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === x) {
      xCnt++;
    } else {
      notXCnt++;
    }

    if (xCnt === notXCnt) {
      break;
    }
  }

  return xCnt + notXCnt;
};

function solution(s) {
  let result = [];

  while (s.length > 0) {
    const temp = otherWords(s);
    result.push(s.slice(0, temp));
    s = s.slice(temp, s.length);
  }

  return result.length;
}

console.log(solution("banana")); // 3
console.log(solution("abracadabra")); // 6
console.log(solution("aaabbaccccabba")); // 3
console.log(solution("abaa")); // 2
console.log(solution("a")); // 1
