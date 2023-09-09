// https://school.programmers.co.kr/learn/courses/30/lessons/181857

// 문제 :  arr의 길이가 2의 거듭 제곱이 되도록 arr에 최소한의 개수로 0을 추가한 배열을 리턴하세요.

/*
 * 조건 정리)
 * 1. arr.length가 1인 경우 2^1이므로 pow는 2이다.
 * 2. arrlength가 0인 경우 2^0이므로 pow는 1이다.
 * 3. arr.length가 1보다 큰 경우 pow는 2^(arr.length/2)이다.
 */

//! ❌ 테스트 케이스는 통과하였지만, 최종 제출시 런터임이 오버된다.

function solution(arr) {
  const pow =
    arr.length === 1 ? 2 : arr.length === 0 ? 1 : Math.pow(2, arr.length / 2);

  while (arr.length !== pow) {
    arr.push(0);
  }
  return arr;
}

console.log(solution([1, 2, 3, 4, 5, 6])); // [1, 2, 3, 4, 5, 6, 0, 0]
console.log(solution([58, 172, 746, 89])); // [58, 172, 746, 89]
