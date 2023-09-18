const solution = (s) => {
  let answer = true;
  let stack = [];

  for (let x of s) {
    if (x === "(") {
      stack.push(x);
    } 
    else {
      if (stack.length === 0) { // 왼쪽, 오른쪽 괄호의 수가 맞지 않아도 false
        answer = false;
        break;
      }
      stack.pop();
    }
  }
  // 모든 원소를 다 돌고 stack에 아무것도 남아있지 않으면 모든 괄호에 대해 짝이 맞다는 것!
  if (stack.length > 0) {
    answer = false;
  }
  return answer;
};