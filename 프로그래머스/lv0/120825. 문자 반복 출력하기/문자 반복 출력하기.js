function solution(my_string, n) {
let arr = [...my_string]
//let maped = arr.map(el => el*n)
for(let i = 0 ; i < arr.length ; i++){
    arr[i] = arr[i].repeat(n)
}
    return arr.join('')
}