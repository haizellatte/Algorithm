function solution(num, k) {
let arr = Array.from(String(num)).join("");
    if(arr.indexOf(k) !== -1) {
        return arr.indexOf(k)+1;
    }
    return arr.indexOf(k);
}