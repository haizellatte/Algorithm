
function common(c, n, alphabet) {
    const len = alphabet.length;

    for (let j = 0; j < len; j++) {
        if (c === alphabet[j]) {
            return alphabet[(n + j) % len];
        }
    }

    return '';
}
// 소문자
function toLowerCase(c, n) {
    return common(c, n, 'abcdefghijklmnopqrstuvwxyz');
}

console.log(toLowerCase('a', 2)); // c

// 대문자
function toUpperCase(c, n){
    return common(c, n, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
}

//공백
function emptySpace(c) {
    // if (c === ' ') {
    //     return c;
    // }
    //
    // return '';
    return c === ' ' ? c : '';
}

function solution(s, n) {
    let result = '';
    for (let i = 0; i < s.length; i++) {
        // result += s[i] === ' ' ? s[i] : '';
        result += emptySpace(s[i], n);
        result += toLowerCase(s[i], n);
        result += toUpperCase(s[i], n);
    }

    return result;
}

// console.log(solution("AB", 1));
// console.log(solution("z", 1));
// console.log(solution("a B z", 4));

// s       n   result
// "AB"       1   "BC"
// "z"       1   "a"
// "a B z"   4   "e F d"