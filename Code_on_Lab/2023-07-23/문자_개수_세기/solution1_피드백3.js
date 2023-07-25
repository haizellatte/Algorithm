// https://school.programmers.co.kr/learn/courses/30/lessons/181902

// 인덱스 - 아스키코드 정리 https://docs.google.com/spreadsheets/d/1Tt52vIlrTi6Z5os9i8-qs7oCEZhcI4-7YX-vvLT-LkQ/edit#gid=0

function counterCommon(s, alphabetCase) {
    const result = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        const alp = s[i];
        const index = alphabetCase.indexOf(alp);
        if (index > -1) {
            result[index] += 1;
        }
    }
    // console.log(JSON.stringify(result));
    return result;
}

function counterUpper(my_string) {
    return counterCommon(my_string, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
}

function counterLower(my_string) {
    return counterCommon(my_string, 'abcdefghijklmnopqrstuvwxyz');
}

function solution(s) {
    // return counterUpper(s).concat(counterLower(s));
    return [counterUpper, counterLower]
        .map(f => f(s))
        .reduce((a, b) => a.concat(b));
}

console.log(solution("Programmers")); // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0]