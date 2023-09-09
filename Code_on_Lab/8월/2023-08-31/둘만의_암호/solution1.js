// https://school.programmers.co.kr/learn/courses/30/lessons/155652

function solution(s, skip, index) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const skipAlphabet = [...alphabet].filter( a => !skip.includes(a));

  return [...s]
    .map(x => skipAlphabet[(skipAlphabet.indexOf(x) + index) % skipAlphabet.length])
    .join('');
}

console.log(solution("aukks", "wbqd", 5)); // "happy"
console.log(solution("bcdefghijklmnopqrstuvwxyz", "a", 1)); // "cdefghijklmnopqrstuvwxyzb"