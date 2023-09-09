// https://school.programmers.co.kr/learn/courses/30/lessons/181858#

// 문제 : arr에서 중복을 제외한 수를 k개 만큼 뽑아 만든 배열을 리턴하세요. 이때 완성된 배열의 길이가 k보다 작으면 나머지 값을 전부 -1로 채웁니다.

// ⭕️ 통과

function solution(arr, k) {
    // 1. k 개수만큼 -1로 채운 배열을 만든다.
    const result = Array(k).fill(-1);
    // 2. 중복되지 않은 원소들을 구한다.
    const onlyNum = arr.filter((v, i) => arr.indexOf(v) === i);
    // 3. result 배열의 0 ~ onlyNum.length 만큼을 2번에서 구한 배열의 값으로 바꾼다.
    result.splice(0, onlyNum.length, ...onlyNum);
    // 4. k전까지 slice한 값을 리턴한다. (length는 1부터 시작하므로)
    return result.slice(0, k);
}

console.log(solution([0, 1, 1, 2, 2, 3], 3)); // 	[0, 1, 2]
console.log(solution([0, 1, 1, 1, 1], 4)); // [0, 1, -1, -1]
console.log(solution([0, 1, 0, 1], 4)); // [0, 1, -1, -1]