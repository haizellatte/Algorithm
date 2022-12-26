function solution(my_string, letter) {
let filtered = [...my_string].filter(el => el !== letter)
return filtered.join('')
}