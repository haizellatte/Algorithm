// https://school.programmers.co.kr/learn/courses/30/lessons/181873

// 왜 for of문은 통과가 안될까요? i가 몇번째 요소인지 몰라서 ?!?!?

function solution(my_string, alp) {
    const result = [];

    for (let i of my_string) {
        result.push(i === alp ? i.toUpperCase() : i);
    }

    return result.join("");
}


console.log(solution("programmers", "p")); // "Programmers"
console.log(solution("lowercase",	"x")); // "lowercase"


// const s = 'abc';
// for (let i of s) {
//   i = 'z';
// }
// console.log(s);

// call by value
// let x = 10;
// let y = x; // 복사
//
// x = 20;
// console.log(x, y);