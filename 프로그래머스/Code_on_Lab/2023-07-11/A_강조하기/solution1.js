// https://school.programmers.co.kr/learn/courses/30/lessons/181874

function solution(myString) {
  return myString.toLowerCase().replaceAll('a', 'A');
}

console.log(solution("PrOgRaMmErS")) // "progrAmmers"