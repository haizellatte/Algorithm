// https://school.programmers.co.kr/learn/courses/30/lessons/181893

/*
* 문제 : 조건을 충족한 배열을 리턴하세요.
* [조건]
* 1. query[i]번 인덱스 = 짝수 : arr에서 query[i]번 인덱스 뒷부분을 잘라 버린다.
* 2. query[i]번 인덱스 = 홀수 : arr에서 query[i] 인덱스 앞부분을 잘라 버린다.
*/

function spliceArr (result, a, b) {
  return result.splice(a, b);
}

function solution(arr, query) {
    let result = [...arr];
    
    for (let i = 0 ; i < query.length; i++) {
        i % 2 === 0 ? 
            spliceArr(result, query[i]+1, arr.length) 
            : spliceArr(result, 0, query[i]);
    }
    
    return result;
}

console.log(solution([0, 1, 2, 3, 4, 5], [4, 1, 2])); // 	[1, 2, 3]