const compareWord = (a, b, n) => {
  if (a[n] === b[n]) {
    return a.localeCompare(b)
  }
  return a[n].localeCompare(b[n])
}

function solution(strings, n) {
  strings.sort((a, b) => compareWord(a, b, n));
  return strings;
}