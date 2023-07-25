// https://school.programmers.co.kr/learn/courses/30/lessons/181891

// concat 안쓰기

function solution(num_list, n) {
  const head = num_list.slice(n, num_list.length);
  const tail = num_list.slice(0, n);
  
  return [...head, ...tail];
}

console.log(solution([2, 1, 6], 1)); // [1, 6, 2]
console.log(solution([5, 2, 1, 7, 5], 3)); // [7, 5, 5, 2, 1]