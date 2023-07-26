function solution(board, k) {
  let answer = 0;
  
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length ; j++) {
      answer += i + j <= k ? board[i][j] : 0;
        }
    }
    return answer;
}
