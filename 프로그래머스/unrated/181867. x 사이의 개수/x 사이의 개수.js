/*
[아이디어 노트]
0. 각 원소의 길이를 체크할 변수 leng와 정답을 리턴할 배열 answer을 선언한다.
1. 각 원소를 돌면서 원소가 "x"가 아니라면 leng+1을 해준다.
2. 만약 원소가 "x"라면 현재 leng를 answer에 푸시하고 leng을 초기화한다.
3. 위 과정을 반복한다.
*/


function solution(myString) {
    let leng = 0;
    let answer = [];
    let str = [...myString];
    
    for(let i = 0; i < str.length; i++) {
        if (str[i] !== "x") {
            leng++;
        } else {
            answer.push(leng);
            leng = 0;
        }
    }
    
    // edge case) 1.leng가 남아있을 경우 2. 마지막 원소가 'x'일 경우
    if (leng > 0) {
        answer.push(leng);
    } else if ((str[str.length-1]) === "x"){
        answer.push(0);
    }
    
    return answer;
}