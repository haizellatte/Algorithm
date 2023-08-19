function isEven(n) {
    return n % 2 === 0;
}

function solution(food) {
    let result = "";

    //food[0]은 물의 개수로, 항상 1이기 때문에 1번째 인덱스부터 확인한다.
    for (let i = 1; i < food.length; i++) {
        let n = isEven(food[i]) ? food[i] / 2 : (food[i] / 2) - 0.5;
        result += String(i).repeat(n);
    }

    const reverseResult = [...result].reverse().join('');
    return result + '0' + reverseResult;
}