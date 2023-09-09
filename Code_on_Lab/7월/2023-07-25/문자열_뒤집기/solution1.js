// https://school.programmers.co.kr/learn/courses/30/lessons/181905

function solution(my_string, s, e) {
  const a = my_string.slice(0, s);
  const b = [...my_string.slice(s, e+1)].reverse();
  const c = my_string.slice(e+1, my_string.length);
  
  return [...a, ...b, ...c].join("")
}

console.log(solution("Progra21Sremm3", 6, 12)); // "ProgrammerS123"
console.log(solution("Stanley1yelnatS", 4, 10)); // "Stanley1yelnatS"