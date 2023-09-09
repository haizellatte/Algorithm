// https://school.programmers.co.kr/learn/courses/30/lessons/138477

function solution(k, score) {
  const fameScore = [];

  return score.map(s => {
    //* fameScore 배열에 s을 넣고 내림차순 정렬한다.
    fameScore.push(s);
    fameScore.sort((a, b) => b - a);
    //* fameScore배열의 금주 명예의 전당 (0, k)만큼 자른다.
    let thisWeekfame = fameScore.slice(0, k);
    //* 그후 마지막 요소를 리턴한다.
    return thisWeekfame[thisWeekfame.length - 1];
  })
}

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200])); // [10, 10, 10, 20, 20, 100, 100]
console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000])); // [0, 0, 0, 0, 20, 40, 70, 70, 150, 300]