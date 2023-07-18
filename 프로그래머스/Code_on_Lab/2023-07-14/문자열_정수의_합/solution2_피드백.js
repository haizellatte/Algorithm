// https://school.programmers.co.kr/learn/courses/30/lessons/181849

function solution(num_str) {
    return [...num_str].map(Number).reduce((acc, cur) => acc + cur, 0);
}


console.log(solution("123456789"));	// 45
console.log(solution("1000000")); //	1