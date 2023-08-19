// https://school.programmers.co.kr/learn/courses/30/lessons/76501

function zip(a, b) {
    const result = [];

    const length = Math.min(a.length, b.length);

    for (let i = 0; i < length; i++) {
        result.push([a[i], b[i]]);
    }

    return result;
}

console.log(zip([1, 2, 3], ['a', 'b', 'c'])); // [[1, 'a'], [2, 'b'], [3, 'c']]
// console.log(zip([1, 2], ['a', 'b', 'c'])); // [[1, 'a'], [2, 'b']]
// console.log(zip([1, 2, 3], ['a', 'b'])); // [[1, 'a'], [2, 'b']]

function solution(absolutes, signs) {
    const answer = zip(absolutes, signs).map(([a, s]) => s ? +a : -a);
    return answer.reduce((a, b) => a + b);
}

// console.log(solution([4, 7, 12], [true, false, true])); // 9
// console.log(solution([1, 2, 3], [false, false, true])); // 0