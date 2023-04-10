function solution(n) {
let result = 0;
let count = 1;
    while(count <= n){
        result ++;
        while(result%3 === 0 || String(result).includes('3'))
            result ++;
            count ++;
    }
    return result;
}