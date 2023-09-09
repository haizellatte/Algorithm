// https://school.programmers.co.kr/learn/courses/30/lessons/181883

// 문제 : queries의 각 배열을 query라고 할때, arr[query]에 해당하는 값에 +1을 더한 배열을 리턴하세요.

function solution(arr, queries) {
    queries.map(([s, e]) => {
        for (let i = s; i <= e; i++) {
            arr[i] += 1;
        } 
    })
  return arr; 
}

console.log(solution([0, 1, 2, 3, 4], [([0, 1], [1, 2], [2, 3])])); // [1, 3, 4, 4, 4]