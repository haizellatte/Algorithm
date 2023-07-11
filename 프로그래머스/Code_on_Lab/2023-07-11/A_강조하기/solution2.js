// https://school.programmers.co.kr/learn/courses/30/lessons/181874

function solution(myString) {
  let result = "";
  
  for (let i = 0; i < myString.length; i++) {
      if (myString[i] === 'a' || myString[i] === 'A') {
        result += "A";
      } else {
        result += myString[i].toLowerCase();
      }
  }
  return result;
}

console.log(solution("PrOgRaMmErS")) // "progrAmmers"