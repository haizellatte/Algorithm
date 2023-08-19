function solution(numbers) {
    const n = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return n.map((v, i) => {
        if(!numbers.includes(v)) {
            return v
        }
    }).filter(v => v >= 0).reduce((a, b) => a + b);
}