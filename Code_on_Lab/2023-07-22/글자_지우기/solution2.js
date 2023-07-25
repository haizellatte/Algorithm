// https://school.programmers.co.kr/learn/courses/30/lessons/181900

// filter로 구현하기

function solution(my_string, indices) {
  return [...my_string].filter((_, i) => !indices.includes(i)).join('');
}

console.log(solution("apporoograpemmemprs", [1, 16, 6, 15, 0, 10, 11, 3])); // "programmers"