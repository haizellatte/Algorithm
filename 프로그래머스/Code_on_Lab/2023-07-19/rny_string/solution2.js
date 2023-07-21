// https://school.programmers.co.kr/learn/courses/30/lessons/181863

// replaceAll 안쓰기

function solution(rny_string) {
    let arr = rny_string.split("");
    let str = '';

    for(let i = 0; i < arr.length; i++) {
        if (arr[i] !== 'm') {
            str += arr[i];
        } else {
            str += 'rn';
        }
    }
    return str;
}

console.log(solution("masterpiece")); // "rnasterpiece"
console.log(solution("programmers")); // "prograrnrners"
console.log(solution("jerry")); // "jerry"
console.log(solution("burn")); // "burn"