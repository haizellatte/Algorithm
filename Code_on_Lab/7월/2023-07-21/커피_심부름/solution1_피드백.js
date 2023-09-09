// https://school.programmers.co.kr/learn/courses/30/lessons/181837

/*
1. 아메리카노 -> 4,500
2. 카페라테 -> 5,000
3. 아무거나 -> 4,500
*/

function calculate (order) {
  let result = 0;

  if (order.includes("americano") || order.includes("anything")) {
    result += 4500;
  } else  {
    result += 5000;
  } 

  return result;
}

function solution(order) {
  let price = order.map((el) => calculate(el));
    
  return price.reduce((acc, cur) => (acc + cur), 0);
}

console.log(solution(["cafelatte", "americanoice", "hotcafelatte", "anything"])); // 19000
console.log(solution(["americanoice", "americano", "iceamericano"])); // 13500