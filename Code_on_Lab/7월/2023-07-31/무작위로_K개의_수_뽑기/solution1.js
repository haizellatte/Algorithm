// https://school.programmers.co.kr/learn/courses/30/lessons/181858#

// 문제 : arr에서 중복을 제외한 수를 k개 만큼 뽑아 만든 배열을 리턴하세요. 이때 완성된 배열의 길이가 k보다 작으면 나머지 값을 전부 -1로 채웁니다.

// ❌ 테스트케이스는 통과하지만, 채점 결과 런타임 에러가 발생.

function solution(arr, k) {
    const result = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i])
        }
    }
    
        while(result.length !== k) {
            result.push(-1)
        }

    
    return result;
}

console.log(solution([0, 1, 1, 2, 2, 3], 3)); // 	[0, 1, 2]
console.log(solution([0, 1, 1, 1, 1], 4)); // [0, 1, -1, -1]
console.log(solution([0, 1, 0, 1], 4)); // [0, 1, -1, -1]