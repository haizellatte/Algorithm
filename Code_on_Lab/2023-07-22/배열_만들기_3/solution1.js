// https://school.programmers.co.kr/learn/courses/30/lessons/181895

function solution(arr, intervals) {
  let head = arr.slice(intervals[0][0], intervals[0][1] + 1);
  let tail = arr.slice(intervals[1][0], intervals[1][1] + 1);
  
  return head.concat(tail);
}

console.log(solution([1, 2, 3, 4, 5],[[1, 3], [0, 4]])); // [2, 3, 4, 1, 2, 3, 4, 5]