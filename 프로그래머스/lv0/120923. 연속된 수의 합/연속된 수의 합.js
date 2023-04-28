function solution(n, total) {
    let result = [];
    let max = ((total * 2) / n + n - 1) / 2;
    let min = max-n+1;
    for(let i=min; i <= max; i++){
        result.push(i)
    }
    return result;
}