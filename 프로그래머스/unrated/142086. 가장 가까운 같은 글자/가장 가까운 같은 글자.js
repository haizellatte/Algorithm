function solution(s) {
  let answer = [-1];
  for (let i = 1; i < s.length; i++) {
    const range = s.slice(0, i);
    const lastIdx = range.lastIndexOf(s[i]);
    // console.log({ 인덱스: i, 단어: s[i], 라스트인덱스: range.lastIndexOf(s[i]) });
    answer.push(lastIdx === -1 ? lastIdx : i - lastIdx);
  }
  return answer;
}