function solution(numbers) {
let sorted = numbers.sort((a,b) =>  a - b);
let max = sorted[0] * sorted[1];
    for(let i = 1; i < sorted.length; i++){
        if(max < sorted[i] * sorted[i+1]){
            max = sorted[i] * sorted[i+1];
        }
    }
    return max;
}