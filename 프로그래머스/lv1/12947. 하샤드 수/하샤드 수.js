function solution(x) {
    const sumN = Array.from(String(x)).map(Number).reduce((a, b) => a + b);
    return x % sumN === 0 ? true : false;
}