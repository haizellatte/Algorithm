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
  
  // return numbers.map(n => map(n));
  return numbers.map((n) => map(n)).join("");
  
  function map(n) {
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
            // console.log([column, row]);
            // console.log(leftPosition);
            // console.log(rightPosition);
            // console.log(
            //   n, distance([column, row], leftPosition, rightPosition, hand)
            // );
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