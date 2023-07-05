/*
문제 해법 : 마이너스(-)를 기준으로 최대한 많이 묶으면 -> 가장 작은 결과를 만들 수 있다.
*/

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 1. 마이너스(-) 연산자를 기준으로 나누어 여러 그룹을 만들어준다.
let groups = input[0].split('-');
let answer = 0;

for (let i = 0; i < groups.length; i++) {
    // 마이너스 연산자로 나눠준 각 그룹 내부는 더하기 연산자로 값을 나눈 후, 모든 값을 누적해 더해준다.
    let cur = groups[i].split("+").map(Number).reduce((a, b) => a + b);
    
    // 이때 첫번째 그룹은 최초값 0에 더해주는 초기값으로, 뺄셈을 수행할 수 없기 때문에 항상 덧셈(+)을 해주고,
    // 0 - 20 불가 ---> 0 + 20 - 이후값 - 이후값
    if (i === 0) answer += cur;
    // 두번째 그룹부터는 뺄셈을 수행해나간다.
    else answer -= cur;
}

console.log(answer);