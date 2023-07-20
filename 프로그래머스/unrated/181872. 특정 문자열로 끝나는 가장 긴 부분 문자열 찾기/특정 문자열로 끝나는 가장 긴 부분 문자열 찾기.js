//  return myString.replaceAll(pat, "x")
// let str = myString.split(pat);

function solution(myString, pat) {
    const n = myString.lastIndexOf(pat);
    return myString.slice(0, n + pat.length);
}