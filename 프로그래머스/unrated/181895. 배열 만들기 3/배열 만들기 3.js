function solution(arr, intervals) {
    let head = arr.slice(intervals[0][0], intervals[0][1] + 1);
    let tail = arr.slice(intervals[1][0], intervals[1][1] + 1);
    
    return head.concat(tail);
}