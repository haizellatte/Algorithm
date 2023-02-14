function solution(array, n) {
let newArr = array.sort((a,b) => a -b);
console.log(newArr)
let close = array[0];

    for(let i = 1 ; i < array.length ; i++){
        if(Math.abs(n - close) > Math.abs(n - array[i])){
            close = array[i]
        }
    } 

return close;
    }