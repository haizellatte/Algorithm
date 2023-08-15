function solution(strings, n) {
    return strings.map(word => [...word].sort((a,b) => a[n] - b[n]))

// return a[n] < b[n] ? -1 : a[n] > b[n] ? 1 : 0;

} 
