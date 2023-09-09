// https://school.programmers.co.kr/learn/courses/30/lessons/131705

// 문제 : 배열의 수 3개를 더해 0이 되는 경우의 수를 구해 리턴하세요. --> 조합 문제.

function solution(number) {
    let answer = 0;

    for (let i = 0; i < number.length; i++) {
        const a = number[i];
        for (let j = i + 1; j < number.length; j++) {
            const b = number[j];
            for (let k = j + 1; k < number.length; k++) {
                const c = number[k];
                if (a + b + c === 0) answer++;
            }
        }
    }

    return answer;
}

console.log(solution([-2, 3, 0, 2, -5])); // 2
console.log(solution([-3, -2, -1, 0, 1, 2, 3])); // 5
console.log(solution([-1, 1, -1, 1])); // 0