function solution(board, moves) {
  let bucket = [];
  
  //* moves 순서대로 인형을 뽑고 뽑은 위치는 0으로 바꿔준다.
  moves.forEach((m) => pickDolls(m - 1));

  function pickDolls(n) {
    for (let column = 0; column < board[n].length; column++) {
      if (board[column][n] !== 0) {
        bucket.push(board[column][n]);
        board[column][n] = 0;
        break;
      }
    }
  }
  
  let count = 0;
  
  //* 2. 중복 인형의 개수를 구한다.
  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i] === bucket[i + 1]) {
      count += 2;
      bucket.splice(i, 2);
      i = 0; // 배열 index가 바뀌었기 때문에 다시 처음부터 반복문을 돌린다.
    }
  }

  if (bucket.length > 0 && bucket[0] === bucket[1]) {
    count += 2;
  }

  return count;
}