function solution(n, numlist) {
let result = [];
for(let i of numlist){
    if(i % n === 0) result.push(i);
}
    return result;
}