// https://school.programmers.co.kr/learn/courses/30/lessons/42862

//* 통과 !

function solution(n, lost, reserve) {
  let result = n - lost.length;
  lost = lost.sort((a, b) => a - b);
  reserve = reserve.sort((a, b) => a - b);

  for (let i = 0; i < lost.length; i++) {
    for (let j = 0; j < reserve.length; j++) {
      // 먼저 자신이 잊어버린 경우를 체크한다.
      if (lost[i] === reserve[j]) {
        result++;
        reserve[j] = "x";
        lost[i] = "x";
      }
    }
  }

  for (let i = 0; i < lost.length; i++) {
    for (let j = 0; j < reserve.length; j++) {
      // 그 후 앞, 뒤번호 학생을 체크한다.
        if (Math.abs(lost[i] - reserve[j]) === 1) {
          result++;
          reserve[j] = "x";
          lost[i] = "x";
        }
    }
  }

  return result;
}

console.log(solution(5, [2, 4], [1, 3, 5])); // 5
console.log(solution(5, [2, 4], [3])); // 4
console.log(solution(4, [1, 3], [2, 4])); // 4

//* 반례 --> 여벌의 체육복을 가지고 있는 학생의 번호가 꼭 체육복을 잃은 학생의 앞번호거나 뒷번호가 아닐 수 있다.
console.log(solution(5, [3, 4], [1, 2, 5])); // 5
console.log(solution(5, [1, 2], [3, 4])); // 4
console.log(solution(5, [4, 2], [3, 5])); // 5

//* 반례 -->  분실 당한 본인이 여분을 가지고 있을 경우 타인에게 빌려줄 수 없다.
console.log(solution(5, [1, 2, 3], [2, 3, 4])); // 4

