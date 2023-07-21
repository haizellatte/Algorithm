/*
1. 아메리카노 -> 4,500
2. 카페라테 -> 5,000
3. 아무거나 -> 4,500
*/

function calculate (order, result) {
    if (order.includes("americano") || order.includes("anything")) {
        result += 4500;
    } else  {
        result += 5000;
    } 
    return result;
}



function solution(order) {
    let result = 0;
    let price = order.map((el) => calculate(el, result));
    
    return price.reduce((acc, cur) => (acc + cur), 0);
}