// https://school.programmers.co.kr/learn/courses/30/lessons/181911

// map 함수 활용하기

function solution(my_strings, parts) {
  return my_strings.map((el, i) => el.slice(parts[i][0], parts[i][1] + 1)).join('');
}

console.log(solution(["progressive", "hamburger", "hammer", "ahocorasick"], [[0, 4], [1, 2], [3, 5], [7, 7]])); // "programmers"