function solution(n) {
    const a = [...n.toString(3)].reverse().join('');
    return parseInt(a, 3);
}