function solution(intStrs, k, s, l) {
    // 1. 각 원소마다 s번째 인덱스부터 s + 1까지 문자열을 잘라 정수로 변환한다.
    let mapping = intStrs.map((num) => parseInt(num.slice(s, s+l)));
    //2. 각 원소를 돌면서 원소가 k보다 큰 값을 담은 배열을 담아 리턴한다.
    return mapping.filter((el) => el > k);
}