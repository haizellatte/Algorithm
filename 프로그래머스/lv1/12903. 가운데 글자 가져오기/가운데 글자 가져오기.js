function solution(s) {
    const e = s.length;
    if (e % 2 === 1) {
        return s.slice(e/2, e/2+1);
    } else {
        return  s.slice(e/2-1, e/2+1);
    }
}