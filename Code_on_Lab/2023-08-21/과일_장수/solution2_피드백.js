// https://school.programmers.co.kr/learn/courses/30/lessons/135808?language=javascript


function solution(k, m, score) {
    score.sort((a, b) => b - a);
    // console.log('score', score);

    let result = 0;

    // 3 - 1 = 2
    //        2        5        8       11
    // [4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 1, 1]
    for (let i = m - 1; i < score.length; i += m) {
        const min = score[i];
        console.log('min', min);
        result += min * m;
    }

    return result;
}

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1])); // 8
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2])); // 33