// https://school.programmers.co.kr/learn/courses/30/lessons/181863

function solution(rny_string) {
  return rny_string.replaceAll('m', 'rn');
}

console.log(solution("masterpiece")); // "rnasterpiece"
console.log(solution("programmers")); // "prograrnrners"
console.log(solution("jerry")); // "jerry"
console.log(solution("burn")); // "burn"