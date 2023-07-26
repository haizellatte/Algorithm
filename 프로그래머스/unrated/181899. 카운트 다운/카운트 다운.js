function solution(start, end) {
    let result = [];
    for (let i = end; i <= start; i++) {
        result.unshift(i)
    }
    return result;
}