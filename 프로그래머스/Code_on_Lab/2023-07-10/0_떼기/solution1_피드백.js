// https://school.programmers.co.kr/learn/courses/30/lessons/181847


function solution(n_str) {
    let start = 0;
    for (let i = 0; i < n_str.length; i++) {
        if (n_str[i] === '0') {
            start += 1;
        } else {
            break;
        }
    }

    let result = '';
    for (let i = start; i < n_str.length; i++) {
        result += n_str[i];
    }

    return result;
}



console.log(solution("0010")); // "10"
console.log(solution("854020")); // "854020"