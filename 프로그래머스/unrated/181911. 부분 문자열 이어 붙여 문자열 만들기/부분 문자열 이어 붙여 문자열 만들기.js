/*
my_strings[i].slice(parts[i][0], parts[i][1] + 1)한 문자열을 순서대로 이어 붙인 문자열을 리턴하여라.
*/


function solution(my_strings, parts) {
    let result = "";
    
    for (let i = 0; i < my_strings.length; i++) {
        result += my_strings[i].slice(parts[i][0], parts[i][1] + 1);
    }
    
    return result;
}