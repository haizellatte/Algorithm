function solution(myString) {
    let str = myString.split("x").sort();
    
    for (let i = 0; i < myString.length; i++) {
        if (str[0] === ""){
            str.shift();
        }
    }
    
    return str;
}