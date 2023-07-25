// https://school.programmers.co.kr/learn/courses/30/lessons/181834

function solution(myString) {
    const beforeI = "abcedfghijk";
    let answer = [];

    for (let i = 0; i < myString.length; i++) {
        if (beforeI.includes(myString[i])) {
            answer.push("l");
        } else {
            answer.push(myString[i]);
        }
    }
    return answer.join("");
}

console.log(solution("abcdevwxyz")); // "lllllvwxyz"
console.log(solution("jjnnllkkmm")); // "llnnllllmm"