// https://school.programmers.co.kr/learn/courses/30/lessons/181831

function solution(arr) {
    let flage = true;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            // console.log(arr[i][j], arr[j][i], arr[i][j] === arr[j][i]);

            if (arr[i][j] !== arr[j][i]) {
                flage = false;
            }
        }
    }
    return flage ? 1 : 0;
}

console.log(solution([
    [5, 192, 33],
    [192, 72, 95],
    [33, 95, 999]
])); // 1
// console.log(solution([[19, 498, 258, 587], [63, 93, 7, 754], [258, 7, 1000, 723], [587, 754, 723, 81]])); // 0