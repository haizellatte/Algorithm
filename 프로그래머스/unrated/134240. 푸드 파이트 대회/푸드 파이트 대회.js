/*
* [조건]
* 1. result의 가운데 수는 0이 되고, 가운데를 기준으로 왼쪽과 오른쪽은 대치이다.
* 2. 두 선수가 먹는 양과 종류, 순서는 같아야 한다.
* 3. 칼로리가 낮은 음식을 먼저 먹을  수 있게 배치한다.
*/

function isEven(n) {
    return n % 2 === 0;
}

function pushFood(e, i) {
    let temp = ''
    for (let k = 0; k < e; k++) {
        temp += i;
    }  
    return temp;
}

function solution(food) {
    let result = "";
    
    food.map((n, i) => {
        if (n > 1) {
            let e =  isEven(n) ? n / 2 : (n / 2) - 0.5;
            result += pushFood(e, i);
        }
    })
    
    const reverseResult = [...result].reverse().join('');
    return result + '0' + reverseResult;
}