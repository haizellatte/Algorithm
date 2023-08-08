function solution(n) {
    let min = 0;
    
    for (let i = 0; i <= n ; i++) {
        if ( n % i === 1) {
            min = i;
            break;
        }
    }
    return min;
}