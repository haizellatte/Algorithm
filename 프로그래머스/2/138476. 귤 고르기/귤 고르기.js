function solution(k, tangerine) {
  let needTangerine = 0;
  let result = 0;

  const typeList = tangerine.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  const typeKey = Object.entries(typeList)
    .sort(([a1, b1], [a2, b2]) => b2 - b1) // 내림차순 정렬
    .map((x) => x[1]); //귤type의 갯수만 뽑아온다.

  for (let key of typeKey) {
    needTangerine += key;
    result++;
    if (needTangerine >= k) break;
  }
  return result;
}