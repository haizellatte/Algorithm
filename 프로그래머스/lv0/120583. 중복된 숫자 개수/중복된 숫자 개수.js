function solution(array, n) {
let filtered = array.filter(el => el === n)
return filtered.length;
}