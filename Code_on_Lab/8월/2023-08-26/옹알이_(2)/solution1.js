// https://school.programmers.co.kr/learn/courses/30/lessons/133499

function isDuplication(n) {
  const arr = [...String(n)]; 

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      return ''
    } 
  }
  return n;
}

function solution(babbling) {
  return babbling
    .map((v) =>
      v
        .replace(/aya/g, 1)
        .replace(/ye/g, 2)
        .replace(/woo/g, 3)
        .replace(/ma/g, 4)
  )
  .map(Number)
  .map((v) => isDuplication(v))
  .filter((v) => v).length;
}

console.log(solution(["aya", "yee", "u"])); // 1
console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"])); // 2
console.log(solution(["ayaye", "uuu", "yeayayeye", "yemawoo", "ayaayaa"])); // 2

// ! 테스트케이스 1, 11, 14, 16, 17 실패 --> 반례
console.log(solution(["ayayeayayeaya"])); // 1

