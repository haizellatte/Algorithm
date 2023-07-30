function solution(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'l') {
            return str.slice(0, i);
        } 
        if (str[i] === 'r') {
            return str.slice(i + 1);
        }
    }
    // l, r 둘다 없으면 빈배열 리턴
    return [];
}