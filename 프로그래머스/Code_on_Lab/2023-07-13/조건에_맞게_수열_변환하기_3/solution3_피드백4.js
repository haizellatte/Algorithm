// https://school.programmers.co.kr/learn/courses/30/lessons/181835

// add, multi
function add(a, b) {
    return a + b;
}

function multi(a, b) {
    return a * b;
}

const bindMulti = multi.bind(null, 20, 10);
// 300만줄
console.log(bindMulti);
console.log(bindMulti()); // 200
console.log(bindMulti(20)); // 200 // 400이 아니다! 여기서 넣은 20은 무시된다.

function arrDo(arr, f) {
    return arr.map((el) => f(el));
}

// 커링

function solution(arr, k) {
    const f = (k % 2 === 1) ? multi.bind(null, k) : add.bind(null, k);
    return arrDo(arr, f);
}

// console.log(solution([1, 2, 3, 100, 99, 98], 3)); // [3, 6, 9, 300, 297, 294]