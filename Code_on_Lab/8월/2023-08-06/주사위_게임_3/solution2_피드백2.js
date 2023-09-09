// https://school.programmers.co.kr/learn/courses/30/lessons/181916?language=javascript

// 빈도 체크
function frequency(...args) {
    const obj = {};

    for (let i = 0; i < args.length; i++) {
        const key = args[i];
        if (obj[key] === undefined) {
            obj[key] = 1;
        } else {
            obj[key] += 1;
        }
    }

    return obj;
}

function solution(a, b, c, d) {
    const diceFrequency = frequency(a, b, c, d);
    const diceType = Object.keys(diceFrequency).map(Number);
    // console.log('diceFrequency 1 ', diceFrequency);
    // console.log('diceFrequency 2 ', Object.entries(diceFrequency));
    const diceEntries = Object
        .entries(diceFrequency)
        .map(([a, b]) => [Number(a), b])
        .sort(([a1, b1], [a2, b2]) => b2 - b1);


    if (diceType.length === 1) {
        return 1111 * diceType[0];
    }

    if (diceType.length === 2) {
        const [[p, pv], [q, qv]] = diceEntries;

        if (p !== q) {
            if (pv === 3) {
                return Math.pow(10 * p + q, 2);
            } else {
                return (p + q) * Math.abs(p - q);
            }
        }
    }

    if (diceType.length === 3) {
        const [[p, pv], [q, qv], [r, rv]] = diceEntries;

        if (q !== r && pv === 2) {
            return q * r
        }
    }

    if (diceType.length === 4) {
        return Math.min(...diceType);
    }

    return 0;
}

console.log(solution(2, 2, 2, 2)); // 2222
console.log(solution(4, 1, 4, 4)); // 1681
console.log(solution(6, 3, 3, 6)); // 27
console.log(solution(2, 5, 2, 6)); // 30
console.log(solution(6, 4, 2, 5)); // 2