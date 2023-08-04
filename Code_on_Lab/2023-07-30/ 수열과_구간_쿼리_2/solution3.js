// https://school.programmers.co.kr/learn/courses/30/lessons/181923

/*
 * [문제]
 * 1. 2차원 배열 queries의 각 원소는 query를 나타내며 [s, e, k]꼴이다.
 * 2.arr.slice(s, e+1)을 했을 때, 각 요소 중 K보다 크면사 그 중 가장 작은 값을 새로운 배열에 담는다.
 * 3. query에 대해 2번 과정을 반복하며 만족하는 수가 없다면 -1을 배열에 담는다.
 */

// slice + sort를 filter와 Max.mind으로 축약 !

function f(arr, query) {
    const [s, e, k] = query;
    const filtered = arr.filter((v, i) => s <= i && i <= e && v > k);
    
    return filtered.length ? Math.min(...filtered) : -1;
}

function solution(arr, queries) {
    return queries.map((query) => f(arr, query));
}

console.log(
  solution(
    [0, 1, 2, 4, 3],
    [
      [0, 4, 2],
      [0, 3, 2],
      [0, 2, 2],
    ]
  )
); //	[3, 4, -1]
