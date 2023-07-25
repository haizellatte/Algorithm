function solution(my_string, s, e) {
    const a = my_string.slice(0, s);
    const b = [...my_string.slice(s, e+1)].reverse();
    const c = my_string.slice(e+1, my_string.length);
    
    return [...a, ...b, ...c].join("")
}