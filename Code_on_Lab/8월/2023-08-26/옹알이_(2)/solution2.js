// https://school.programmers.co.kr/learn/courses/30/lessons/133499?language=javascript

function count(target, find) {
    let result = 0;

    for (let i = 0; i < target.length; i++) {
        if (find === target[i]) {
            result += 1;
        }
    }

    return result;
}

function solution(babbling) {
    let result = 0
    const can = ['aya', 'ye', 'woo', 'ma']

    for (let i = 0; i < babbling.length; i++) {
        let word = babbling[i]
        console.log('word', word)

        for (let j = 0; j < can.length; j++) {
            word = word.replaceAll(`${can[j]}${can[j]}`, 'X')
            console.log('word X', word)
        }

        for (let j = 0; j < can.length; j++) {
            word = word.replaceAll(can[j], 'O')
            console.log('word O', word)
        }

        if (word.length === count(word, 'O')) {
            console.log('if', babbling[i]);
            result += 1
        }
    }

    return result
}


console.log(solution(['aya', 'yee', 'u', 'maa'])) // 1
console.log(solution(['ayaye', 'uuu', 'yeye', 'yemawoo', 'ayaayaa'])) // 2


// console.log('|', 'yeye'.replaceAll('ye', ''), '|')
// console.log('|', 'yeye'.replace('ye', ''), '|')
// console.log('|', 'iwefjyeoiwjfye'.replace('ye', ''), '|')
