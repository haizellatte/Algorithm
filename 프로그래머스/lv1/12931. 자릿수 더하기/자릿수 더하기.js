function solution(n) {
    return Array.from(String(n)).map(Number).reduce((a, b) => a + b)
}