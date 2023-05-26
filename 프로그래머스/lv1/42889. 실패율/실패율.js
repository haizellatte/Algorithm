function solution(N, stages) {
    let result = [];
    for(let i = 1 ; i <= N; i++){
        //1. 분모 : 스테이지에 도달한 플레이어의 수를 구한다.
        let reach = stages.filter((x) => x >= i).length;
        //2. 분자 : 스테이지에 도달했으나 아직 클이어하지 못한 플레이어 수를 구한다.
        let curr = stages.filter((x) => x === i).length;
        //3. 그리고 분수를 만들어 result에 i와 함께 푸시한다.
        result.push([i, curr/reach]);
        //이때 result : [[1,0.125],[2,0.42857142857142855],[3,0.5],[4,0.5],[5,0]]
    }
    //4. result의 분수를 내림차순으로 정렬한다.
    result.sort((a,b) => b[1] - a[1]); //result : [[3,0.5],[4,0.5],[2,0.42857142857142855],[1,0.125],[5,0]]
    //5. 그리고 정렬한 result에서 i만 빼내 리턴한다.
    return result.map((x) => x[0]);
}