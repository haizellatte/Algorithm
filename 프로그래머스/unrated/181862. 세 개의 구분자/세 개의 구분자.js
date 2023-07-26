function solution(myStr) {
  const answer = myStr.split(/[a|b|c]/).filter(x => x);
  return answer.length ? answer : ["EMPTY"];
}