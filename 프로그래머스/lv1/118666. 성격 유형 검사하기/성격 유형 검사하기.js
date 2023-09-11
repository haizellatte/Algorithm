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
