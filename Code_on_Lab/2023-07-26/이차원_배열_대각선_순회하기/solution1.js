// https://school.programmers.co.kr/learn/courses/30/lessons/181829

// 문제 : 조건 i + j <= k를 만족하는 board[i][j]의 합을 리턴하세요.

function solution(board, k) {
  let answer = 0;
  
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length ; j++) {
      answer += i + j <= k ? board[i][j] : 0;
    }
  }
  return answer;
}

console.log(solution([[0, 1, 2], [1, 2, 3], [2, 3, 4], [3, 4, 5]], 2)); // 8 
