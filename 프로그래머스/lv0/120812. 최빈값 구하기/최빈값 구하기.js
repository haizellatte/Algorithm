function solution(array) {
    // 자료사전 생성
    const dict = {0:0}
    // 배열 내의 수가 등록되어있다면 ++, 아니라면 1로 등록
    array.forEach(item => {
        dict[item] = dict[item] ? ++dict[item] : 1
    })
    // 제일 큰 값 및 해당 값을 담을 인덱스 준비
    const max = Math.max(...Object.values(dict))
    let idx = 0
    // 최댓값이 2개 이상이라면 -1을 반환하며 아니라면, 최댓값의 인덱스를 저장
    if(Object.values(dict).filter(a => a === max).length !== 1) {
        return -1
    } else {
        Object.values(dict).forEach((a,i) => a === max ? idx=i : null)
    }
    // 반환
    return Number(Object.keys(dict)[idx])
}