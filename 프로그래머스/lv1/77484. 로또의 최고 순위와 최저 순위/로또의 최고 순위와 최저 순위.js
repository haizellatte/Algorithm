function solution(lottos, win_nums) {
    //1. lottos 배열을 순회하며 로또 숫자와 일치하는 숫자의 갯수를 correct에 저장한다. -> 최저 등수가 됨
    const correct = lottos.filter(lotto => win_nums.includes(lotto)).length;
    
    //2. lottos 배열을 순회하며 0인 갯수를 zeros에 저장한다.
    const zeros = lottos.filter(lotto => lotto === 0).length;

    //3-1. 최저 순위는 7 - 맞은 점수가 되고, 만약 맞은 갯수가 0이라면 6위가 된다.
    let min = 7-correct >= 6 ? 6 : 7 - correct;
    //3-2. 최고 순위는 최저 순위 - 0의 개수가 되고, 만약 모두 0일 경우 1등이 될 수 있으므로 1이 된다.
    let max = min-zeros < 1 ? 1 : min-zeros;
    
    return [max, min];
}