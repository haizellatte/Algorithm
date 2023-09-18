function solution(s) {
    const arr= s.split(' ').map(Number);
    const [a, b] = [Math.min(...arr), Math.max(...arr)]
    return `${a} ${b}`
 }