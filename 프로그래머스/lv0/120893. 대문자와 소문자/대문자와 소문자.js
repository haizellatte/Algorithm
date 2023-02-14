function solution(my_string) {
let result = '';
    for(let el of my_string){
        if(el === el.toUpperCase()){ //대문자라면
            result += (el.toLowerCase());
        } else {
            result += (el.toUpperCase());
        }
    }
    return result;
}