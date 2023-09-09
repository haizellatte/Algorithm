// https://school.programmers.co.kr/learn/courses/30/lessons/134240

//* 좀 더 간단히 정리 ! : isEven함수 -> Math.floor로 처리

function solution(food) {
    let result = "";

    //food[0]은 물의 개수로, 항상 1이기 때문에 1번째 인덱스부터 확인한다.
    for (let i = 1; i < food.length; i++) {
        const n = Math.floor((food[i] / 2));
        result += String(i).repeat(n);
    }

    const reverseResult = [...result].reverse().join('');
    return result + '0' + reverseResult;
}

console.log(solution([1, 3, 4, 6])); // "1223330333221"
console.log(solution([1, 7, 1, 2])); // "111303111"