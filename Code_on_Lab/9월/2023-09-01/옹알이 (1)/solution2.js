// https://school.programmers.co.kr/learn/courses/30/lessons/120956

// 정규식 사용하지 않고 풀기 !

function solution(babbling) {
  const able = ["aya", "ye", "woo", "ma"];
  let count = 0;

  for (let b of babbling) {
    for (let a of able) {
      b = b.replace(a, ' ');
    }
    if (b.trim() === '') { // 양쪽 공백 제거 --> 요소가 2개 이상 있을 수도 있으니까
      count++;
    }
  }

  return count;
}

console.log(solution(["aya", "yee", "u", "maa", "wyeoo"])); // 1
console.log(solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"])); // 3
