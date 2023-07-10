function solution(n_str) {  
    let start = 0;
    let end = n_str.length;
    
    for (let i = 0; i <= end; i++) {
        if (n_str[i] === '0') {
            start += 1;
        } else if (n_str[i] !== '0') break;
    }
    return n_str.slice(start, end)
}