function solution(n) {
    let arr = [];

    for (let i = 0; i < n; i++) {
        const temp = Array(n).fill(0);
        temp[i] = 1;
        arr.push(temp);
        
    }
    return arr;
}