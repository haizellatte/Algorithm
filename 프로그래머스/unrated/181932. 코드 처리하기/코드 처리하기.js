function isEvenOrOdd(i, n) {
  return (i % 2 === n)
}

function solution(code) {
  let mode = 0;
  let ret = '';
    
  for (let i = 0; i < code.length; i++) {
    if (code[i] !== "1" && mode === 0 && isEvenOrOdd(i, 0)) {
      ret += code[i];
    }
    if (code[i] !== "1" && mode === 1 && isEvenOrOdd(i, 1)) {
      ret += code[i];
    }
    if (code[i] === "1") {
      mode = mode === 0 ? 1 : 0;
    }
  }
    
  return ret.length > 0 ? ret : "EMPTY";
}