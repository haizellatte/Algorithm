// https://school.programmers.co.kr/learn/courses/30/lessons/181928

function solution(num_list) {
  let even = "";
  let odd = "";

  for (let i = 0; i < num_list.length; i++) { 
    if (num_list[i] % 2 == 0) {
      even += num_list[i];
    } else {
      odd += num_list[i];
    }
  }
  return Number(even) + Number(odd);
}
