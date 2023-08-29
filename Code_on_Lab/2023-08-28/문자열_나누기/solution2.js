// https://school.programmers.co.kr/learn/courses/30/lessons/140108?language=javascript

function solution(s) {
    let result = 0;
    let count1 = 0;
    let count2 = 0;
    let temp = '';

    // banana
    for (let i = 0; i < s.length; i++) {
        if (temp === '') {
            temp = s[i];
        }

        if (temp === s[i]) {
            count1 += 1;
        } else {
            count2 += 1;
        }

        // console.log(i, s.length - 1, count1, count2);
        if (i === s.length - 1 || count1 === count2) {
            result += 1;
            count1 = 0;
            count2 = 0;
            temp = '';
        }
    }

    return result;
}

console.log(solution("banana")); // 3
console.log(solution("abracadabra")); // 6
console.log(solution("aaabbaccccabba")); // 3

console.log(solution("aaba")); // 1
