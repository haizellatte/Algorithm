/*
[문제 해결 아이디어]
1. 해당 값 뒤에 1을 붙인 값이 최종값을 나눴을 때 최종값/현재값 0이 되면 1을 붙이고
     -> 3 + 3*10 - (3-1)
2. 0이 안된다면 *2를 한다.
3. 최종 횟수에 +1을 한 값을 리턴한다.

[주석]
나는 A -> B로 가는 로직으로 구현했는데, 실패가 떴다.
*/
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [a, b] = input[0].split(" ").map(Number);
let present = a; // 현재값 변수로, 초기값은 a이다.
let cnt = 1 // 총 횟수로 초기값은 1이다.

while (a <= b) {
    // a -> b가 될 수 있다면
   if (b%a === 0) {
    let future = a + (a*10) - (a-1); // 끝자리에 1을 붙이는 식
        if (b%future === 0) {
            a = future;
            cnt++;
            console.log(cnt+1);
            break;
       }
        a *= 2;
        cnt ++;   
   }
     else {
        console.log(-1);
    }
}
