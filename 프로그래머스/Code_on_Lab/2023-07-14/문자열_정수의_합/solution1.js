// https://school.programmers.co.kr/learn/courses/30/lessons/181849

function solution(num_str) {
    let answer = 0;
    
    for (let num of num_str) {
        answer += Number(num);
    }
    return answer;
}

console.log(solution("123456789"));	// 45
console.log(solution("1000000")); //	1