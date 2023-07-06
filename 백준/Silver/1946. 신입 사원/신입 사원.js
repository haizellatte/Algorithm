let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

/*
[문제 해결 아이디어]
1. 지원자들을 1차 결과를 기준으로 오름차순으로 정렬한다.
2. 이때 첫번째 지원자는 모든 절차에서 1등이므로 통과,
3. 이후 지원자부터는 2차 결과의 등수가, 위 지원자들의 등수보다 높다면(즉 숫자가 작다면) 통과된다.
위 로직을 반복해 최종적으로 통과된 지원자 수의 합계를 리턴한다.

[로직 구현]
1. 순위 X를 기준으로 오름차순 정렬
2. 차례로 한 명씩 확인하며, 순위 Y가 현재까지 확인한 Y 순위 중 가장 작은 수라면 cnt + 1
*/

let testCase = Number(input[0]); // 총 지원 절차
let line = 1;

// 각 지원자의 X, Y 순위를 arr 배열에 넣어준다.
for (let tc = 0; tc < testCase; tc++) {
    n = Number(input[line]); // 총 지원자 수 : 5, 7
    let arr = [];
    for (let i = line + 1; i <= line + n; i++) { // line + 1 -> 3번째줄부터 확인
        let data = input[i].split(" ").map(Number); //X순위, Y순위를 띄여쓰기로 나눠서 arr배열에 넣어줌.
        arr.push(data);
    }
    // X순위를 기준으로 오름차순 정렬
    arr.sort((x, y) => x[0] - y[0]);
    
    let cnt = 0;
    let minValue = 100001; // 최대 지원자의 수 +1 값
    // X순위를 기준으로 정렬한 배열에서 Y 순위가 작은 지원자 수를 cnt+1해준다.
    for (let [x, y] of arr) {
        if (y < minValue) { // 해당 지원자의 Y 순위가 minValue보다 작다면,
            // minValue를 바꿔주고 cnt++;
            minValue = y;
            cnt++;
        }
    }
    console.log(cnt);
    line += n + 1; // 그 다음 테스트케이스로 넘어간다.
}



