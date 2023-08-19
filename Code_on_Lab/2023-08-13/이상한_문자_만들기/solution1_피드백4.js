// https://school.programmers.co.kr/learn/courses/30/lessons/12930

function isEven(n) {
    return n % 2 === 0;
}

function toUpper(c) {
    return c.toUpperCase();
}

function toLower(c) {
    return c.toLowerCase();
}

function word(w) {
    return [...w].map((c, i) => isEven(i) ? toUpper(c) : toLower(c)).join('');
}

function solution(s) {
    return s
        .split(" ")
        .map(word)
        .join(' ');
}

console.log(solution("try hello world")); // "TrY HeLlO WoRlD"
console.log(solution("  TRy HElLo  WORLD ")); // "  TrY HeLlO  WoRlD "