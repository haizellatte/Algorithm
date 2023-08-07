function solution(a, b) {
    let result = 0;
    
    let s = a;
    let e = b;
    
    if (a > b) {
        s = e;
        e = a;
    }
    
    for (let i = s; i <= e; i++) {
        result += i;
    }
    
    return result;
}