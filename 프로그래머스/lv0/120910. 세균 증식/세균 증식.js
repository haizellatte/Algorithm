function solution(n, t) {
let base = n;
let i = 2;
let count = 0;
    while(count < t){
        base *= i;
        count++;
    }
   return base;
}


 