function solution(n, left, right) {
  let result = [];

  //1. left ~ right까지 순회한다.
  for (let i = left; i < right + 1; i++) {
    const column = Math.floor(i / n);
    const row = i % n;
    result.push(Math.max(column, row) + 1); //2. 행과 열 중 가장 큰 값에 +1한 값을 추가한다.
    //또는 result.push(divide >= rest ? divide + 1 : rest + 1);
  }

  return result;
}