function solution(arr) {
    const minN = Math.min(...arr);
    const deleteMin = arr.filter(v => v !== minN);
    return deleteMin.length > 0 ? deleteMin : [-1];
    
}