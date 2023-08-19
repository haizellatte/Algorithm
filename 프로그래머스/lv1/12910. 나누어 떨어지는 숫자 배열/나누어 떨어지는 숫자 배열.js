function solution(arr, divisor) {
    const divisorArr = arr.filter(v => v % divisor === 0).sort((a, b) => a - b);
    
    return divisorArr.length > 0 ? divisorArr : [-1];
}