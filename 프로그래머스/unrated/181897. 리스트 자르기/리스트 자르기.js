// https://school.programmers.co.kr/learn/courses/30/lessons/181897
/*
문제 : num_list를 조건 n에 따라 자른 배열을 리턴하세요.
조건 :
1. slicer에 담긴 정수는 차례대로 a, b, c이다.
2. n의 조건은 다음과 같다.
 - n = 1 : 0번째 인덱스 ~ b번 인덱스까지
 - n = 2 : a번째 인덱스 ~ 마지막 인덱스까지
 - n = 3 : a번째 인덱스 ~ b번 인덱스까지
 - n = 4 : a번째 인덱스 ~ b번 인덱스까지 c간격으로
*/

function solution(n, slicer, num_list) {
    let [a, b, c] = slicer;
    
    if(n === 1) {
        return num_list.slice(0, b+1);
    }
    
    if(n === 2) {
        return num_list.slice(a, num_list.length+1);
    }
    
    if(n === 3) {
        return num_list.slice(a, b+1);
    }
    
    if(n === 4) {
        let arr = [];
        for (let i = a; i <= b; i+= c) {
            arr.push(num_list[i])
        }
        return arr;
    }
}