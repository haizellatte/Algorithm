// https://school.programmers.co.kr/learn/courses/30/lessons/181880

/*
1. 짝수라면 n/2 횟수++;
2. 홀수라면 (n - 1)/2 횟수++;
3. 위 과정을 1이 될때까지 반복하여 각 원소를 1로 만들기 위해 필요한 총 횟수를 리턴하라
*/

// 재귀 함수 :) 씨익!
function calculator(n) {
    if (n === 1) {
        return 0;
    }

    return 1 + calculator(n % 2 === 0 ? n / 2 : (n - 1) / 2);
}

function solution(num_list) {
    return num_list.map(calculator).reduce((a, b) => a + b, 0);
}

console.log(solution([12, 4, 15, 1, 14])); // 11
