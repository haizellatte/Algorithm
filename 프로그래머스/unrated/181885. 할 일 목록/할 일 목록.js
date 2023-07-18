function solution(todo_list, finished) {
    let result = todo_list.filter((el, idx) => finished[idx] === false);
    return result;
}