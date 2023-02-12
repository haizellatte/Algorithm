function solution(n) {
let prime = [];
    for(let i = 2; i <= Math.sqrt(n); i++){
        while(n % i === 0){
            prime.push(i);
            n /= i;
           } 
        }
         if(n >= 2) {  //n이 더이상 소인수분해 할 수 없을때,
            prime.push(n);
    }
    const set = Array.from(new Set(prime));
    return set;
}