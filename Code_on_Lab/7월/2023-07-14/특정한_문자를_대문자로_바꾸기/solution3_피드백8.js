// https://school.programmers.co.kr/learn/courses/30/lessons/181873

// 왜 for of문은 통과가 안될까요? i가 몇번째 요소인지 몰라서 ?!?!?

function isSame(a, b) {
    return a === b ? b.toUpperCase() : b;
}

function solution(my_string, alp) {

    return Array.from(my_string)
        .map(isSame.bind(null, alp)).join('');
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



const s = '12345678';
console.log(s.split(''));
console.log(s.split('').map(Number));