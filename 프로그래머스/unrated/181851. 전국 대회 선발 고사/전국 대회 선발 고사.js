/*
[아이디어 노트]
1. rank를 탐색하면서 rank의 idx에 맞는 attendance[idx] === true인 애들의 idx를 새로운 배열 arr에 담는다.
2. arr에서 앞에서부터 요소 3개를 꺼내 연산한 값을 리턴한다.
*/

function answer(a, b, c) {
    return a * 10000 + b * 100 + c;
}

function solution(rank, attendance) {
    
    let arr = [];
    rank.filter((el, idx) => attendance[idx] === true ? arr.push({value: el, idx: idx }) : "");
    
    arr.sort((a,b) => a.value - b.value);
    

    return answer(arr[0].idx, arr[1].idx, arr[2].idx);
}