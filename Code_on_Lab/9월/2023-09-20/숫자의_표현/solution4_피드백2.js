// https://school.programmers.co.kr/learn/courses/30/lessons/12924?language=javascript

function solution(n) {
    let sum = 0;
    let count = 0;

    for (let i = 1; i <= n; i++) {

        for (let j = i; j <= n; j++) {
            sum += j;

            if (sum === n) {
                sum = 0;
                count += 1;
                break;
            }

            if (sum > n) {
                sum = 0;
                break;
            }
        }
    }

    return count;
}

console.log(solution(15)); // 4