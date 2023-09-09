// https://school.programmers.co.kr/learn/courses/30/lessons/181887

// 같은 작업 묶기 --> 근데 undefined가 나온다 🥲

const sum = (arr, condition) => arr.filter((_, idx) => condition(idx)).reduce((acc, cur) => acc + cur, 0);

function solution(num_list) {

    const oddSum = sum(num_list, (idx => idx % 2 === 0));
    const evenSum = sum(num_list, (idx => idx % 2 === 1));

    return oddSum < evenSum ? evenSum : oddSum;
}

console.log(solution([4, 2, 6, 1, 7, 6])); // 17
console.log(solution([-1, 2, 5, 6, 3])); // 8

