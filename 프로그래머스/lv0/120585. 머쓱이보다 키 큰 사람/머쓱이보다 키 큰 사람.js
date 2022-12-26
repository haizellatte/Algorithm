function solution(array, height) {
let result = array.filter(el => el > height)
return result.length;
}


// function solution(array, height) {
// let count = 0;
// for(let el of array){
//     if(el > height){
//         count++;
//     }
// }
//     return count;
// }