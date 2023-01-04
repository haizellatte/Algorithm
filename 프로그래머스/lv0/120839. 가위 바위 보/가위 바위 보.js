function solution(rsp) {
let newRsp = rsp.split(""); //['2', '0', '5']
let result = '';
for(let i = 0 ; i < rsp.length; i++){
    if(newRsp[i] === '2') {
        result += '0';
    } 
    else if(newRsp[i] === '0') {
        result += '5';
    }
    else {
        result += '2';
    }
}
    return result;
}

//가위 : 2
//바위 : 0
//보 : 5

