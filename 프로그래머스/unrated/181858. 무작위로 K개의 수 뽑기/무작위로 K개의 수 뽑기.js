function solution(arr, k) {
    // 1. k 개수만큼 -1로 채운 배열을 만든다.
    const result = Array(k).fill(-1);
    // 2. 중복되지 않은 원소들을 구한다.
    const onlyNum = arr.filter((v, i) => arr.indexOf(v) === i);
    // result 배열의 0 ~ onlyNum.length 만큼을 2번에서 구한 배열의 값으로 바꾼다.
    result.splice(0, onlyNum.length, ...onlyNum);
    return result.slice(0, k);
}