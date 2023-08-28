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
      s = s.slice(xCnt+notXCnt, s.length);
      break;
    }
  }
  return xCnt + notXCnt;
}

function solution(s) {
  let result = [];

  while (s.length > 0) {
    result.push(s.slice(0, otherWords(s)));
    s = s.slice(otherWords(s), s.length);
  }

  return result.length;
}