// https://school.programmers.co.kr/learn/courses/30/lessons/12930

function changLetter(letter, i) {
    if (i % 2 === 0) {
        return letter.toUpperCase();
    } else {
        return letter.toLowerCase();
    }
    ;
}

function solution(s) {
    return s
        .split(" ")
        .map((word, i) => word.split("")
            .map((letter, i) => i % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase())
            .join(''))
        .join(' ');
}

console.log(solution("try hello world")); // "TrY HeLlO WoRlD"
console.log(solution("  TRy HElLo  WORLD ")); // "  TrY HeLlO  WoRlD "