// https://school.programmers.co.kr/learn/courses/30/lessons/181928

function solution(num_list) {
  let even = num_list.filter((el) => el % 2 === 0).join("");
  let odd = num_list.filter((el) => el % 2 === 1).join("");

  return Number(even) + Number(odd);
}
