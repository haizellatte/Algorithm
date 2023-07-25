// https://school.programmers.co.kr/learn/courses/30/lessons/181837

/*
1. 아메리카노 -> 4,500
2. 카페라테 -> 5,000
3. 아무거나 -> 4,500
*/

function calculate(order) {
  return order.includes("cafelatte") ? 5000 : 4500;
}

function solution(order) {
  let price = order.map((el) => calculate(el));
    
  return price.reduce((acc, cur) => (acc + cur), 0);
}

console.log(solution(["cafelatte", "americanoice", "hotcafelatte", "anything"])); // 19000
console.log(solution(["americanoice", "americano", "iceamericano"])); // 13500