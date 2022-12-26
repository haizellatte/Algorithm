function solution(n, k) {
let 양꼬치값 = 12000 * n;
let 음료값 = 2000 * k;
let 서비스음료 = Math.floor(n/10)
return 양꼬치값 + 음료값 - 서비스음료*2000
}