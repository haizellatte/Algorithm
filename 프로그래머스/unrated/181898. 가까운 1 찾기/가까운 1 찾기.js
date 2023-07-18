function solution(arr, idx) {
    let result = -1;
    
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === 1 && i >= idx) {
            result = i;
        }
    }
    return result;
}