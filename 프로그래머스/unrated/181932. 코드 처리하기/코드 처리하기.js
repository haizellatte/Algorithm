function isEvenOrOdd(i, n) {
  return i % 2 === n;
}

function f(code, i, mode) {
  return isEvenOrOdd(i, mode) ? code[i] : '';
}

function solution(code) {
  let mode = 0;
  let ret = "";

  for (let i = 0; i < code.length; i++) {
    if (code[i] !== "1") {
      ret += f(code, i, mode);
    }
    if (code[i] === "1") {
      mode = mode === 0 ? 1 : 0;
    }
  }

  return ret.length > 0 ? ret : "EMPTY";
}