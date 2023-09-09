// https://school.programmers.co.kr/learn/courses/30/lessons/64061

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

  //* 3. 반례) 반복문을 다 돌고 난후에도 중복 요소가 있다면 중복 인형 개수에 더해준다.
  if (bucket.length > 0 && bucket[0] === bucket[1]) {
    count += 2;
  }

  return count;
}

// [4, 3, 1, 1, 3, 2, 4]

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
); // 4
console.log(
  solution(
    [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 4, 4, 0],
      [1, 2, 2, 1],
    ],
    [2, 3, 1, 4, 2, 3]
  )
); // 6
console.log(
  solution(
    [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [1, 2, 3, 4]
  )
); // 0