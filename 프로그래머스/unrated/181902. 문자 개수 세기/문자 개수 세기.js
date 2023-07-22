function solution(my_string) {
    let arr = Array(52).fill(0);
    
    [...my_string].map((al) => { 
        const code = al.charCodeAt(al); // 아스키코드 확인
        // 대문자라면
        if (al === al.toUpperCase()) {
            return arr[code - 65] += 1;
        } else {
           return arr[code - 71] += 1;
        }
    })
    return arr;
}


