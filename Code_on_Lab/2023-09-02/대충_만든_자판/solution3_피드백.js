// https://school.programmers.co.kr/learn/courses/30/lessons/160586?language=javascript

function pairs(obj) {
    const result = [];

    for (const key in obj) {
        result.push([key, obj[key]]);
    }

    return result;
}

console.log(pairs('ABACD'.split('')));

function indexMin(obj, arr) {
    return arr.reduce((a, b, i) => ({...a, [b]: a[b] < i + 1 ? a[b] : i + 1}), obj);
}

function log(tag, x) {
    if (x === undefined) {
        x = tag;
        tag = '->';
    }
    console.log(tag, x);
    return x;
}

function add(a, b) {
    return a + b;
}

function sum(arr) {
    return arr.reduce(add);
}

function solution(keymap, targets) {
    const map = keymap
        .map(key => key.split(''))
        .reduce(indexMin, {});
    console.log('map', map);

    return targets
        .map(x => x.split(''))
        // .map(x => log('#', x))
        .map(x => log(x))
        .map(x => x.map(y => map[y]))
        .map(x => sum(x) || -1);
}

console.log(solution(["ABACD", "BCEFD"], ["ABCD", "AABB"])); // [9, 4]
console.log(solution(["AA"], ["B"])); // [-1]
console.log(solution(["AGZ", "BSSS"], ["ASA", "BGZ"])); // [4, 6]

console.log(solution(["ABACD", "BCEFD"], ["XABCD", "AABB"])); // [-1, 4]


// const obj =  { A: 1, B: 1, C: 2, D: 5, E: 3, F: 4 }
// console.log({...obj, A: obj['A'] < 2 ? 3 : obj['A']})