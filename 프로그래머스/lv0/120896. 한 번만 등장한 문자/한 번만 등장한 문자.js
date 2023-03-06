function solution(s) {
let duplicate = [...s].filter((v,i) => s.indexOf(v) !== i); //["a","b","c","a","c"]
let result = [];
 for(let i = 0 ; i < s.length ; i++){
     if(!duplicate.includes(s[i])){
         result.push(s[i]);
     }
 }
    return result.sort().join('');
}