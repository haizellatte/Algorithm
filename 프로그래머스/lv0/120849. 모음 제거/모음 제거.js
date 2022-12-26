function solution(my_string) {
let out = ['a', 'e', 'i', 'o', 'u' ]
let filtered = [...my_string].filter(el => !out.includes(el))
return filtered.join('');
}