// https://school.programmers.co.kr/learn/courses/30/lessons/120956

function solution(babbling) {
  return babbling
    .map((v) => v.replace(/(aya|ye|woo|ma)/g, ""))
    .filter((v) => !v).length;
}

console.log(solution(["aya", "yee", "u", "maa", "wyeoo"])); // 1
console.log(solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"])); // 3