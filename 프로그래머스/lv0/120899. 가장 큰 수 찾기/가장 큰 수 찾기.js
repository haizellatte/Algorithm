function solution(array) {
let result = [];
let max = array[0];
    for(let i = 1; i < array.length ; i++){
        if(max < array[i]){
            max = array[i];
        }
    }
    result.push(max);
    result.push(array.indexOf(max));
    return result;
    
}