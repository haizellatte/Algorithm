function solution(n) {
let base = 1;
let count = 1;
    while(base <= n){
        base = base * count;
        count++;
    }
    return count-2;
}