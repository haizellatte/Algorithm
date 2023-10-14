function checkParenthesis(arr) {
  const correctSet = {
    "]": "[",
    ")": "(",
    "}": "{",
  };
  const left = Object.values(correctSet);
  const stack = [];
  let isEmpty = false;

  arr.forEach(x => {
    if (left.includes(x)) {
      stack.push(x); // 왼쪽 괄호라면: stack에 push
    } else {
      //오른쪽 괄호라면:
      if (correctSet[x] === stack.at(-1)) { //만약 맨 마지막에 넣은 왼쪽 괄호랑 세트라면 넣은 왼쪽 괄호를 pop으로 삭제한다.
        stack.pop();
      } else { // 세트가 아니거나 stack이 비어있으면 올바른 괄호가 될수 없다.
        isEmpty = true;
      }
    }
  })
  return stack.length === 0 && !isEmpty;
}

function solution(s) {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    result += checkParenthesis([...s]);
    s = s.slice(1).concat(s[0]); //* 왼쪽으로 s회전
  }

  return result;
}