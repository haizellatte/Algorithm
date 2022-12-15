function solution(numbers) {
return numbers.reduce((acc, ele)=>{
    return acc+ ele;
}) / numbers.length
}