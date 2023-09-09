// https://school.programmers.co.kr/learn/courses/30/lessons/181837

/*
1. 아메리카노 -> 4,500
2. 카페라테 -> 5,000
3. 아무거나 -> 4,500
*/

// map, reduce 안쓰기
function solution(order) {
  let result = 0;

  for (let i = 0; i < order.length; i++) {
    result += order[i].includes("cafelatte") ? 5000 : 4500;
  }

  return result;
}

console.log(solution(["cafelatte", "americanoice", "hotcafelatte", "anything"])); // 19000
console.log(solution(["americanoice", "americano", "iceamericano"])); // 13500