// https://school.programmers.co.kr/learn/courses/30/lessons/12926

function caesar(c, n) {
  const lowerAlp = "abcdefghijklmnopqrstuvwxyz";
  const upperAlp = lowerAlp.toUpperCase();

  if (lowerAlp.includes(c)) {
    let caesarN = lowerAlp.indexOf(c) + n;
    if (caesarN > 25) {
      caesarN = caesarN - 26;
    }
    return lowerAlp[caesarN];
  }

  if (upperAlp.includes(c)) {
    let caesarN = upperAlp.indexOf(c) + n;
    if (caesarN > 25) {
      caesarN = caesarN - 26;
    }
    return upperAlp[caesarN];
  }

  else {
    return c;
  }
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