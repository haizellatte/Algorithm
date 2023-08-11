// 문제 : left ~ right까지의 수 중 약수의 개수가 짝수라면 +, 홀수라면 - 한 수를 구하여라.


function countDivisor(n) {
    let temp = [];
    for (let i = 0; i <= n; i++) {
        if (n % i === 0) {
            temp.push(i)
        }
    }
    return temp.length;
}

function solution(left, right) {
    let answer = 0;
    for (let i = left; i <= right; i++) {
        if (countDivisor(i) % 2 === 0) {
            answer += i;
        } else {
            answer -= i;
        }
    }
    
    return answer;
}