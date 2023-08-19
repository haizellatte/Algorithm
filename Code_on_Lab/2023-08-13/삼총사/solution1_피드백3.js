// https://school.programmers.co.kr/learn/courses/30/lessons/131705?language=javascript

function combination(arr, n) {
    if (n === 1) {
        return arr.map(x => [x]);
    }

    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const rest = arr.slice(i + 1);
        const combi = combination(rest, n - 1);
        result.push(...combi.map(x => [arr[i], ...x]));
    }

    return result;
}

function solution(number) {
    let answer = 0;
    const n = 3;

    const combi = combination(number, n);

    for (let i = 0; i < combi.length; i++) {
        let sum = 0;
        for (let j = 0; j < combi[i].length; j++) {
            sum += combi[i][j];
        }

        if (sum === 0) {
            answer += 1;
        }
    }

    return answer;
}

console.log(solution([-2, 3, 0, 2, -5])); // 2
console.log(solution([-3, -2, -1, 0, 1, 2, 3])); // 5
console.log(solution([-1, 1, -1, 1])); // 0

// test
// console.log(solution([1, 2, 3, 4, 5]));
