function Add(n, arr) {
    for(let i = 0; i < n; i++) {
        arr.push(n);
    }
}


function solution(arr) {
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
        Add(arr[i], result)
    }
    return result;
}