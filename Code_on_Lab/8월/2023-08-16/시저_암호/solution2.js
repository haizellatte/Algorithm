// https://school.programmers.co.kr/learn/courses/30/lessons/12926

function caesar(c, n) {
  const lowerAlp = "abcdefghijklmnopqrstuvwxyz";
  const upperAlp = lowerAlp.toUpperCase();
  let caesarN = (lowerAlp.indexOf(c) + n) % 26;

  if (lowerAlp.includes(c)) {
    return lowerAlp[caesarN];
  } else if (upperAlp.includes(c)) {
    caesarN = (upperAlp.indexOf(c) + n) % 26;
    return upperAlp[caesarN];
  }
  return c;
}

function solution(s, n) {
  return [...s]
    .map(c => {
      return caesar(c, n) 
    })
    .join("");
}

console.log(solution("AB", 1)); // "BC"
console.log(solution("z", 1)); // "a"
console.log(solution("a B z", 4)); // "e F d"