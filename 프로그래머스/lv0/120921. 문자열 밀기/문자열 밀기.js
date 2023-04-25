function solution(A, B) {
    if (A === B) return 0;
    for (let i = 1; i < A.length; i++) {
        const check = `${A.slice(A.length - i, A.length)}${A.slice(0, A.length - i)}`;
        console.log(check)
        if (check === B) return i;
    }
    return -1;
}