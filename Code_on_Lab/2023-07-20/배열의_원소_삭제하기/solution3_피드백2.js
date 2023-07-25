// https://school.programmers.co.kr/learn/courses/30/lessons/181844

// arr의 각 원소는 delete_list에 포함되지 않아야 한다.

function includes(arr, x) {
    let flag = false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            flag = true;
            break;
        }
    }

    return flag;
}

function filter(arr, f) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (f(arr[i])) {
            result.push(arr[i]);
        }
    }

    return result;
}

function solution(arr, dList) {
    // return arr.filter(el => !delete_list.includes(el));
    return filter(arr, (x) => !includes(dList, x));
}

console.log(solution([293, 1000, 395, 678, 94], [94, 777, 104, 1000, 1, 12])); // [293, 395, 678]
console.log(solution([110, 66, 439, 785, 1], [377, 823, 119, 43])); // [110, 66, 439, 785, 1]

console.log(solution([1, 2, 3, 4, 5], [1, 3, 2, 4])); // 5