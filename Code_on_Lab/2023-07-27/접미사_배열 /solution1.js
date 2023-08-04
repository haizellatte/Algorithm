// https://school.programmers.co.kr/learn/courses/30/lessons/181909

function solution(my_string) {
  let arr = [];
  for (let i = 0; i < my_string.length; i++) {
    arr.push(my_string.slice(i));
  }
  return arr.sort();
}

console.log(solution("banana")); // ["a", "ana", "anana", "banana", "na", "nana"]
console.log(solution("programmers")); // "programmers"	["ammers", "ers", "grammers", "mers", "mmers", "ogrammers", "programmers", "rammers", "rogrammers", "rs", "s"]