// https://school.programmers.co.kr/learn/courses/30/lessons/181835

// add, multi
function add(a, b) {
    return a + b;
}

function multi(a, b) {
    return a * b;
}


function arrDo(arr, f, k) {
    return arr.map((el) => f(el, k));
}

function solution(arr, k) {
    const f = (k % 2 === 1) ? multi : add;
    return arrDo(arr, f, k);
}

console.log(solution([1, 2, 3, 100, 99, 98], 3)); // [3, 6, 9, 300, 297, 294]