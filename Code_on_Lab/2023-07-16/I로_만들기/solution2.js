// https://school.programmers.co.kr/learn/courses/30/lessons/181834

/*
* 각 알파벳끼리 대소 비교가 가능하다! 
* "a" > "b" // --> false
* "a" < "b" // --> true
*/

function solution(myString) {
    // myString을 배열로 만든 후 각 원소를 돌면서 원소보다 l이 크다면, 즉 l보다 이전의 알파벳이라면 l로 바꾼다.    
    let answer = [...myString].map(el => el < 'l' ? 'l' : el).join("");
    
    return answer;
}

console.log(solution("abcdevwxyz")); // "lllllvwxyz"
console.log(solution("jjnnllkkmm")); // "llnnllllmm"