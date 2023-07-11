// https://school.programmers.co.kr/learn/courses/30/lessons/181927

// take
function head(arr, n) {
    console.log(arr, n);

    if (n === undefined) {
        return arr[0];
    }

    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(arr[i]);
    }

    return result;
}

// console.log(head([1, 2, 3])); // 1
// console.log(head([1, 2, 3], 2)); // [1, 2]
// console.log(head([1, 2, 3, 4, 5], 2)); // [1, 2]

function tail(arr, n) {
    // const copy = Array.prototype.slice.call(arr);

    const copy = [];
    for (let i = 0; i < arr.length; i++) {
        copy.push(arr[i]);
    }

    return head(copy.reverse(), n);
}
console.log(tail([1, 2, 3])); // 1
console.log(tail([1, 2, 3], 2)); // [1, 2]
console.log(tail([1, 2, 3, 4, 5], 2)); // [1, 2]



function solution(num_list) {
    const [end, frontEnd] = tail(num_list, 2);

    if (end > frontEnd) {
        num_list.push(end - frontEnd);
    } else {
        num_list.push(end * 2);
    }
    return num_list;
}

// console.log(solution([2, 1, 6])); // [2, 1, 6, 5]
// console.log(solution([5, 2, 1, 7, 5])); // [5, 2, 1, 7, 5, 10]