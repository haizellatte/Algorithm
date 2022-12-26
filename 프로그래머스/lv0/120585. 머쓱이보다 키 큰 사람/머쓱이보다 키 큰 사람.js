function solution(array, height) {
let count = 0;
for(let el of array){
    if(el > height){
        count++;
    }
}
    return count;
}