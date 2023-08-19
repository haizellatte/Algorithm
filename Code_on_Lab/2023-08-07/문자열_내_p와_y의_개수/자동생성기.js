// function counterP(s) {
//     return counter(s, 'p');
// }

function solution(s) {
    for (let i = 0; i < s.length; i++) {
        const c = s[i];

        const templet = `function counter${c.toUpperCase()}(s) {
    return count(s, '${c}');
}`;

        console.log(templet);
    }
}

console.log(solution('abcdefghijklmnopqrstuvwxyz'));