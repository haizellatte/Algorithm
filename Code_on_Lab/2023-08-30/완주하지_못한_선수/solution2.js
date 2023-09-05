// https://school.programmers.co.kr/learn/courses/30/lessons/42576

//* 통과

function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"])); // "leo"
console.log(
  solution(
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola"]
  )
); // "vinko"
console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
); // "mislav"

//* 테스트케이스 6번 반례 --> 1명의 참가자만 존재하고, 아무도 도착하지 않은 경우
console.log(solution(["John"], [])); // "John"
