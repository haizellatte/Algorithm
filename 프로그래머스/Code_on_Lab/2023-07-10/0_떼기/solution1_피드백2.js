// https://school.programmers.co.kr/learn/courses/30/lessons/181847


function solution(n_str) {
    let start = Array.from(n_str) // '0010'
        .findIndex((a) => '123456789'.indexOf(a) > -1);

    let result = '';
    for (let i = start; i < n_str.length; i++) {
        result += n_str[i];
    }

    return result;
}



console.log(solution("0010")); // "10"
console.log(solution("854020")); // "854020"

console.log('123456789'.indexOf('0')); // -1
console.log('123456789'.indexOf('3')); // 2