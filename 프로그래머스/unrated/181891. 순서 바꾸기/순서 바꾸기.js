function solution(num_list, n) {
    const head = num_list.slice(n, num_list.length);
    const tail = num_list.slice(0, n);
    
    return head.concat(tail);
}