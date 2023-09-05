// https://school.programmers.co.kr/learn/courses/30/lessons/42576

//* 테스트케이스 4개 실패 + 효율성  테스트 시간 초과

function solution(participant, completion) {
  let arr = Array(participant.length).fill(true);

  arr.forEach((_, i) => {
    if (participant.indexOf(completion[i]) >= 0) {
      arr[participant.indexOf(completion[i])] = false;
    }
  });

  return participant[
    arr.map((v, i) => (v ? i : null)).filter((v) => v !== null)
  ];
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
console.log(solution(["John"], [])); // "John"
