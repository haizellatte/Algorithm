// https://school.programmers.co.kr/learn/courses/30/lessons/12930

function isEven(n) {
    return n % 2 === 0;
}
function word(w) {
    let result = '';

    for (let i = 0; i < w.length; i++) {
        if (isEven(i)) {
            result += w[i].toUpperCase();
        } else {
            result += w[i].toLowerCase();
        }
    }

    return result;
}

function solution(s) {
    return s
        .split(" ")
        .map(word)
        .join(' ');
}

console.log(solution("try hello world")); // "TrY HeLlO WoRlD"
console.log(solution("  TRy HElLo  WORLD ")); // "  TrY HeLlO  WoRlD "