// https://school.programmers.co.kr/learn/courses/30/lessons/42862?language=javascript

function solution(n, lost, reserve) {
    lost.sort((a, b) => a - b);
    reserve.sort((a, b) => a - b);

    for (let i = 0; i < lost.length; i++) {
        for (let j = 0; j < reserve.length; j++) {
            if (lost[i] === reserve[j]) {
                lost.splice(i, 1);
                reserve.splice(j, 1);
            }
        }
    }

    let answer = n - lost.length;

    for (let i = 0; i < lost.length; i++) {
        const l = lost[i];
        for (let j = 0; j < reserve.length; j++) {
            if (l === reserve[j]) {
                answer += 1;
                reserve.splice(j, 1);
                break;
            }

            if ((l + 1) === reserve[j]) {
                answer += 1;
                reserve.splice(j, 1);
                break;
            } else if ((l - 1) === reserve[j]) {
                answer += 1;
                reserve.splice(j, 1);
                break;
            }
        }
    }

    return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5])); // 5
console.log(solution(5, [2, 4], [3])); // 4
console.log(solution(3, [3], [1])); // 2
