// https://school.programmers.co.kr/learn/courses/30/lessons/136798?language=javascript

function divisor(n) {
    const result = [];

    for (let i = 1; i * i < n + 1; i++) {
        if (i * i === n) {
            result.push(i);
        } else if (n % i === 0) {
            result.push(i, Math.floor(n / i));
        }
    }

    return result;
}

function sum(arr) {
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }

    return result;
}

function solution(number, limit, power) {
    const arr = [];

    for (let i = 1; i < number + 1; i++) {
        const temp = divisor(i);
        arr.push(temp.length);
    }

    return sum(arr.map(x => x > limit ? power : x));
}

console.time();
// console.log(solution(5, 3, 2)); // 10
// console.log(solution(10, 3, 2)); // 21

console.log(solution(100_000, 3, 2)); // 200064
console.timeEnd();
