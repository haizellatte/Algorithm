// arr의 각 원소는 delete_list에 포함되지 않아야 한다.

function solution(arr, delete_list) {
    return arr.filter(el => !delete_list.includes(el));
}