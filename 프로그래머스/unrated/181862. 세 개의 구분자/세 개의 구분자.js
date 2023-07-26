function splitWord(s, a, b) {
  return b ? s.split(a).join(b) : s.split(a).filter(x => x);
}

function solution(s) {
  const splitA = splitWord(s, 'a', 'b');
  const splitB = splitWord(splitA, 'b', 'c');
  const splitC = splitWord(splitB, 'c');
    
  return splitC.length > 0 ? splitC : ["EMPTY"];
}
