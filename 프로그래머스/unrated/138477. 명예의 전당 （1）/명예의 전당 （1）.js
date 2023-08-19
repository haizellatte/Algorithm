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