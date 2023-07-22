function solution(arr) {
    let flage = true;
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i][j] !== arr[j][i]) {
                flage = false;
            } 
        }
    }
    return flage ? 1 : 0;
}