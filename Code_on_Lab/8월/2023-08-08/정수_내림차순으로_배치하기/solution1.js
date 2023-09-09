// https://school.programmers.co.kr/learn/courses/30/lessons/12933

function solution(n) {
    return Number(Array.from(String(n)).sort((a, b) => b - a).join(''));
}

console.log(solution(118372)); // 873211