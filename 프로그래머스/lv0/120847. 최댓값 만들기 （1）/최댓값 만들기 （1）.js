function solution(numbers) {
let sort = numbers.sort((a,b)=> a-b)
return sort[sort.length-2]*sort[sort.length-1]
}