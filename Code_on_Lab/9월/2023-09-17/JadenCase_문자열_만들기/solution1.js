// https://school.programmers.co.kr/learn/courses/30/lessons/12951

function solution(s) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (i === 0 || s[i - 1] === " ") { // 0번째거나 첫 문자이면 대문자로
      answer += s[i].toUpperCase();
    } else if (!isNaN(s[i])) { // 숫자라면 그대로
    answer += s[i];
    } else {
      answer += s[i].toLowerCase(); // 나머지는 소문자로 변환
    }
  }

  return answer;
}

console.log(solution("3people unFollowed me")); // "3people Unfollowed Me"
console.log(solution("for the last week")); // "For The Last Week"