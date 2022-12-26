function solution(s1, s2) {
let count = 0
for(let el of s1){
    for(let vl of s2){
        if(el === vl){
            count++;
        }
    }
}
    return count;
}