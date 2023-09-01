function solution(s, skip, index) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const skipAlphabet = [...alphabet].filter( a => !skip.includes(a));

  return [...s].map(
    x =>
      skipAlphabet[(skipAlphabet.indexOf(x) + index) % skipAlphabet.length]
  ).join('');
}