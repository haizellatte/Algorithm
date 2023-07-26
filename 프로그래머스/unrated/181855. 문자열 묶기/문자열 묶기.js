
// 문제 : 각 원소들을 길이가 같은 것끼리 그룹으로 묶었을 때, 최대가 되는 개수값을 리턴하세요.

function solution(strArr) {
    // 각 원소들을 원소의 길이로 값을 바꾸고 오름차순 정렬
    changeToLen = strArr.map(v => v.length).sort();

    
    const result = {};
    changeToLen.forEach((x) => {
    result[x] = (result[x] || 0)+1;
});
    
    return Object.values(result).sort((a, b) => b - a)[0]
}

