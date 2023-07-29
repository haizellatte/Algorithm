function solution(arr) {
    // 1. 런타임 에러를 막기 위해 pow 배열을 미리 지정해준다.
    const powArr = [1,2,4,8,16,32,64,128,256,512,1024,2048];
    
    for (let i = 0; i < powArr.length; i++) {
        if(powArr.includes(arr.length)) {
            break;
        } 
        arr.push(0);
    }
    
    // 엣지케이스) 길이가 1인 경우 2^1 = 2로 arr를 바로 리턴한다.
    if(arr.length === 1) {
        return arr;
    }
    
    return arr;
}