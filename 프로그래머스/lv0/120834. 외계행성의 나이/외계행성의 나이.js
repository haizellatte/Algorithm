function solution(age) {
const arr = ['a','b','c','d','e','f','g','h','i','j']
const Age = String(age);
let result = []
for(let i = 0 ; i < Age.length ; i++){
    Age[i] = arr[Age[i]];
    result.push(arr[Age[i]]);

}
    return result.join('');
}