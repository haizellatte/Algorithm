// https://school.programmers.co.kr/learn/courses/30/lessons/181858#

// 문제 : arr에서 중복을 제외한 수를 k개 만큼 뽑아 만든 배열을 리턴하세요. 이때 완성된 배열의 길이가 k보다 작으면 나머지 값을 전부 -1로 채웁니다.

// ⭕️ 중복된 요소를 제거한 배열을 만들어주는 set도 가능하다!

function solution(arr, k) {
    // 1. 중복된 요소를 제거한 배열을 만든다.
    const set = new Set(arr);
    // 2. 만든 배열에서 k개수까지 자른 후,
    const result = [...set].slice(0, k);
    // 3. length가 k와 같을 때까지 -1을 추가한다.
    while (result.length !== k) {
        result.push(-1);
    }

    return result;
}

console.log(solution([0, 1, 1, 2, 2, 3], 3)); // 	[0, 1, 2]
console.log(solution([0, 1, 1, 1, 1], 4)); // [0, 1, -1, -1]
console.log(solution([0, 1, 0, 1], 4)); // [0, 1, -1, -1]