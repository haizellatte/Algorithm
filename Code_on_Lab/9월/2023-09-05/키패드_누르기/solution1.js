// https://school.programmers.co.kr/learn/courses/30/lessons/67256

//* [2, 5, 8, 0] 인 경우 어느손으로 눌러야 하는지 판별하는 함수
function distance(current, leftPosition, rightPosition, hand) {
  const [cCol, cRow] = current;
  const [lCol, lRow] = leftPosition;
  const [rCol, rRow] = rightPosition;
  if (
    Math.abs(cCol - lCol) + Math.abs(cRow - lRow) >
    Math.abs(cCol - rCol) + Math.abs(cRow - rRow)
  ) {
    return "right";
  } else if (
    Math.abs(cCol - lCol) + Math.abs(cRow - lRow) <
    Math.abs(cCol - rCol) + Math.abs(cRow - rRow)
  ) {
    return "left";
  }
  else {
    return hand;
  }
}

function solution(numbers, hand) {
  const keypad = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ['*', 0, '#']
  ];
  const onlyLeft = [1, 4, 7];
  const onlyRight = [3, 6, 9];
  let leftPosition = [3, 0];
  let rightPosition = [3, 2];
  
  return numbers.map((n) => typingHand(n)).join("");
  
  function typingHand(n) {
    let answer = '';
    for (let row = 0; row < keypad.length; row++) {
      for (let column = 0; column <= keypad[row].length; column++) {
        if (keypad[column][row] === n) {
          if (onlyLeft.includes(n)) {
            answer += "L";
            leftPosition = [column, row];
          } else if (onlyRight.includes(n)) {
            answer += "R";
            rightPosition = [column, row];
          } else {
            if (distance([column, row], leftPosition, rightPosition, hand) === 'left') {
              answer += "L";
              leftPosition = [column, row];
            } else {
              answer += "R";
              rightPosition = [column, row];
            }
          }
        }
      }
    }
    return answer;
  }
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5], "right")); // "LRLLLRLLRRL"
console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right")); // "LRLLLRLLRRL"
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left")); // "LRLLRRLLLRR"
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right")); // "LLRLLRLLRL"