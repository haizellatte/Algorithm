function solution(a, d, included) {
    let sequence = [];
    let answer = 0;
    
    // 등차 수열 만들기
    for (let i = a; i < 100000; i += d) {
        sequence.push(i);
        if (sequence.length === included.length) break;
    }

    // included가 true인 항들 더하기
    for (let i = 0; i < included.length; i++) {
        if (included[i]) {
            answer += sequence[i]
        }
    }
   
   // included.forEach((x, i) => x ? answer += sequence[i] :  0);
    
    return answer;
}