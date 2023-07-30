

function f(arr, query) {
    const [s, e, k] = query;
    const filtered = arr.filter((v, i) => s <= i && i <= e && v > k);
    
    return filtered.length ? Math.min(...filtered) : -1;
}


function solution(arr, queries) {
    return queries.map((query) => f(arr, query));
}