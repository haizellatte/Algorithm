// https://school.programmers.co.kr/learn/courses/30/lessons/181931

// forEach -> 반복문으로 구현하기

function solution(a, d, included) {
  let sequence = [];
  let answer = 0;

  // 등차 수열 만들기
  for (let i = a; i < a + i * d; i += d) {
    sequence.push(i);
    if (sequence.length === included.length) break;
  }

  // included가 true인 항들 더하기
  for (let i = 0; i < included.length; i++) {
    if (included[i]) {
      answer += sequence[i]
    }
  }
  
  return answer;
}

console.log(solution(3, 4, [true, false, false, true, true])); // 37
console.log(solution(7, 1, [false, false, false, true, false, false, false])); // 10 