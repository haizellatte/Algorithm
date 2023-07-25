// https://school.programmers.co.kr/learn/courses/30/lessons/181844

// arr의 각 원소는 delete_list에 포함되지 않아야 한다.

function solution(arr, dList) {
    // return arr.filter(el => !delete_list.includes(el));

    const result = [];

    for (let i = 0; i < arr.length; i++) {
        let flag = false;

        for (let j = 0; j < dList.length; j++) {
            if (dList[j] === arr[i]) {
                flag = true;
                break;
            }
        }

        if (!flag) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(solution([293, 1000, 395, 678, 94], [94, 777, 104, 1000, 1, 12])); // [293, 395, 678]
console.log(solution([110, 66, 439, 785, 1], [377, 823, 119, 43])); // [110, 66, 439, 785, 1]

console.log(solution([1, 2, 3, 4, 5], [1, 3, 2, 4])); // 5