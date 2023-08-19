// https://school.programmers.co.kr/learn/courses/30/lessons/181893

/*
* 문제 : 조건을 충족한 배열을 리턴하세요.
* [조건]
* 1. query[i]번 인덱스 = 짝수 : arr에서 query[i]번 인덱스 뒷부분을 잘라 버린다.
* 2. query[i]번 인덱스 = 홀수 : arr에서 query[i] 인덱스 앞부분을 잘라 버린다.
*/

function subArr(arr, s, e) {
    const result = [];

    if (e > arr.length) {
        e = arr.length;
    }

    for (let i = s; i < e; i++) {
        result.push(arr[i]);
    }

    return result;
}

// console.log(subArr([1, 2, 3, 4, 5], 1, 3)); // [2, 3]
// console.log(subArr([1, 2, 3, 4, 5], 0, 6)); // [1, 2, 3, 4, 5]

function solution(arr, query) {
    let result = [...arr];

    for (let i = 0; i < query.length; i++) {
        result = i % 2 === 0
            ? subArr(result, 0, query[i] + 1) // 뒷부분
            : subArr(result, query[i], arr.length); // 앞부분
        console.log(result);
    }

    return result;
}

console.log(solution([0, 1, 2, 3, 4, 5], [4, 1, 2])); // [1, 2, 3]