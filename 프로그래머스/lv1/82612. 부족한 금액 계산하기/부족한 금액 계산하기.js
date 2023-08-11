function solution(price, money, count) {
    let answer = 0;
    
    for (let i = price; i <= price * count; i+=price) {
        answer += i;
    }
    
    return (money >= answer) ? 0 : answer - money;
    
    
}