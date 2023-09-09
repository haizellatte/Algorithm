// https://school.programmers.co.kr/learn/courses/30/lessons/181857

// 문제 :  arr의 길이가 2의 거듭 제곱이 되도록 arr에 최소한의 개수로 0을 추가한 배열을 리턴하세요.

/*
* 다른 접근법
* 1. 2의 pow 배열을 미리 지정해준다.
* 2. pow 배열의 원소 중 arr.length보다 큰 값을 찾아 해당 값에 - arr.length한 값만큼 arr를 새로 만들어 0으로 채운다.
* 3. 기존 arr와 2번에서 만든 배열을 합쳐준다.
 */

//! ⭕️ 통과

function solution(arr) {
    // 1.  2의 pow 배열을 미리 지정해준다.
    const powArr = [1,2,4,8,16,32,64,128,256,512,1024,2048];
    // 2. pow 배열의 원소 중 arr.length보다 큰 값을 찾아 해당 값에 - arr.length한 값만큼 배열을 새로 만들어 0으로 채운다.
    const arr2 = new Array(powArr.find(x => x >= arr.length) - arr.length).fill(0);
    // 3. 기존 arr와 2번에서 만든 배열을 합쳐 리턴한다.
    return [...arr, ...arr2];
}

console.log(solution([1, 2, 3, 4, 5, 6])); // [1, 2, 3, 4, 5, 6, 0, 0]
console.log(solution([58, 172, 746, 89])); // [58, 172, 746, 89]
