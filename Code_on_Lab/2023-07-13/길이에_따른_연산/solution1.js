// https://school.programmers.co.kr/learn/courses/30/lessons/181879

function solution(num_list) {
  let add = 0;
  let multiple = 1;
  
  for (let i of num_list) {
      add += i;
      multiple *= i;
  }
  
  if (num_list.length >= 11) {
    return add;
  } else {
    return multiple;
  }
};

console.log(solution([3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1])); // 51
