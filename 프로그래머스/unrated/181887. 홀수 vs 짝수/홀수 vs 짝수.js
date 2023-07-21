/*
홀수 원소들의 합 VS 짝수 원소들의 합 중 큰 값을 리턴하라.
단, 첫번째 원소는 0번이 아닌 1번째 원소이다. -> 즉 짝수 인덱스가 홀수가 된다.
*/


function solution(num_list) {
    // 홀수번째 원소들의 합(짝수 인덱스)
    let odd = num_list.filter((el, idx) => idx % 2 === 0).reduce((acc, cur) => acc + cur);
     // 짝수번째 원소들의 합(홀수 인덱스)
    let even = num_list.filter((el, idx) => idx % 2 === 1).reduce((acc, cur) => acc + cur);
    
    return odd > even ? odd : even;
}