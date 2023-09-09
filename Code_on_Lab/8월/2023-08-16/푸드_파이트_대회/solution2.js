// https://school.programmers.co.kr/learn/courses/30/lessons/134240

//* 좀 더 간단히 정리 ! --> pushFood의 for문과 + solution의 map을 하나의 for문 안에서 처리

function isEven(n) {
    return n % 2 === 0;
}

function solution(food) {
    let result = "";

    //food[0]은 물의 개수로, 항상 1이기 때문에 1번째 인덱스부터 확인한다.
    for (let i = 1; i < food.length; i++) {
        let n = isEven(food[i]) ? (food[i] / 2) : (food[i] / 2) - 0.5;
        result += String(i).repeat(n);
    }

    const reverseResult = [...result].reverse().join('');
    return result + '0' + reverseResult;
}

console.log(solution([1, 3, 4, 6])); // "1223330333221"
console.log(solution([1, 7, 1, 2])); // "111303111"