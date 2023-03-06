function solution(my_string) {
let result = '';
    for(let i of my_string){
        if(i !== ' '){
            result += i
        }
    }
    return eval(result);
}