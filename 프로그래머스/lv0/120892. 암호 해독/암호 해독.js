function solution(cipher, code) {
let recyle = code -1;
let result = '';
    while(recyle < cipher.length){
        result += cipher[recyle];
        recyle += code;
    }
    return result;
}