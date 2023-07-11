// https://school.programmers.co.kr/learn/courses/30/lessons/181906

// my_string에 대해서 반복해야 할까?

function solution(my_string, is_prefix) {
    let prefix = "";

    for (let i = 0; i < is_prefix.length; i++) {
        prefix += my_string[i];
        if (prefix === is_prefix) {
            return 1;
        }
    }

    return 0;
}

console.log(solution("banana", "ban")); // 1
console.log(solution("banana", "nan")); // 0
console.log(solution("banana", "abcd")); // 0
console.log(solution("banana", "bananan")); // 0