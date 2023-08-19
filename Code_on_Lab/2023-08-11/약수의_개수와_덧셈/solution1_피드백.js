// https://school.programmers.co.kr/learn/courses/30/lessons/77884

// 문제 : left ~ right까지의 수 중 약수의 개수가 짝수라면 +, 홀수라면 - 한 수를 구하여라.

function isEven(n) {
    return n % 2 === 0;
}

function countDivisor(n) {
    let temp = [];
    for (let i = 0; i <= n; i++) {
        if (n % i === 0) {
            temp.push(i)
        }
    }
    return temp;
}

function solution(left, right) {
    let answer = 0;
    for (let i = left; i <= right; i++) {
        if (isEven(countDivisor(i).length)) {
            answer += i;
        } else {
            answer -= i;
        }
    }
    return answer;
}

console.log(solution(13, 17)); // 43 
console.log(solution(24, 27)); // 52 