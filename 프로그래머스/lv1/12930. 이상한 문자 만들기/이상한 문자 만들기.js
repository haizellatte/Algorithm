function changLetter(letter, i) {
  if (i % 2 === 0) {
    return letter.toUpperCase();
  } else {
    return letter.toLowerCase();
  };
} 

function solution(s) {
  return s
    .split(" ")
    .map((word, i) => word.split("").map((letter, i) => changLetter(letter, i)).join('')).join(' ')
}
