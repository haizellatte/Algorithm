// https://school.programmers.co.kr/learn/courses/30/lessons/118666

/*
* [점수체계]
* 1 또는 7 -> 3점
* 2 또는 6 -> 2점
* 3 또는 5 -> 1점
* 4 -> 0점
! ==> 즉 choices[i]에서 -4를 했을 때 음수면 survey[i][0], 양수면 survey[i][1]유형이 점수를 얻고, 
!     점수는 choices[i]-4 한 값의 절대값이 된다. -> Math.abs(choices[i] - 4)
*/

function solution(survey, choices) {
  let types = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
  let result = '';

  //* choice에 따른 유형별 점수를 집계한다.
  for (let i = 0; i < choices.length; i++) {
    const choiceType = choices[i] - 4;
    choiceType < 0
      ? (types[survey[i][0]] += Math.abs(choiceType))
      : (types[survey[i][1]] += Math.abs(choiceType));
  }

  const typeKey = Object.keys(types);

  //* value에 따라 유형 결과를 조합한다.
  for (let i = 0; i < typeKey.length; i += 2) {
  if (types[typeKey[i]] >= types[typeKey[i + 1]]) { //* 점수가 같거나 i번째 점수가 더 크다면(점수가 같다면 사전순이 우선이니까 i번째가 우선이다.)
      result += typeKey[i];
    } else {
      result += typeKey[i + 1];
    }
  }

  return result;
}

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5])); // "TCMA"
console.log(solution(["TR", "RT", "TR"], [7, 1, 3])); // "RCJA"