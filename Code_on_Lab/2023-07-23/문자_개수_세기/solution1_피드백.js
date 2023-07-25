// https://school.programmers.co.kr/learn/courses/30/lessons/181902

// 인덱스 - 아스키코드 정리 https://docs.google.com/spreadsheets/d/1Tt52vIlrTi6Z5os9i8-qs7oCEZhcI4-7YX-vvLT-LkQ/edit#gid=0

function counterUpper(my_string) {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const upperArr = new Array(26).fill(0);

    for (let i = 0; i < my_string.length; i++) {
        const alp = my_string[i];
        const index = upper.indexOf(alp);
        if (index > -1) {
            upperArr[index] += 1;
        }
    }
    // console.log(JSON.stringify(upperArr));
    return upperArr;
}

function counterLower(my_string) {
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const lowerArr = new Array(26).fill(0);

    for (let i = 0; i < my_string.length; i++) {
        const alp = my_string[i];
        const index = lower.indexOf(alp);
        if (index > -1) {
            lowerArr[index] += 1;
        }
    }
    // console.log(JSON.stringify(lowerArr));
    return lowerArr;
}

function solution(s) {
    return counterUpper(s).concat(counterLower(s));
}

console.log(solution("Programmers")); // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0]