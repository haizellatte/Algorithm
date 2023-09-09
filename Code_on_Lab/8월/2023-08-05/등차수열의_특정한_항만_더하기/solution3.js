// https://school.programmers.co.kr/learn/courses/30/lessons/181931

// ! 코드 단축 : 등차수열을 만드는 과정 생략

function solution(a, d, included) {
  let answer = 0;

  // 0 ~ included.length-1 까지 반복하면서
  for (let i = 0; i < included.length; i++) {
    // included[i]가 true라면 a + i * d 값을 answer에 더한다.
    if (included[i]) {
      answer += a + i * d;
    }
  }
  return answer;
}

console.log(solution(3, 4, [true, false, false, true, true])); // 37
console.log(solution(7, 1, [false, false, false, true, false, false, false])); // 10 