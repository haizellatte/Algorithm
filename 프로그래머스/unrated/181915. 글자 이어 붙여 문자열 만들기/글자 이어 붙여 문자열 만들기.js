function solution(my_string, index_list) {
    let arr = [...my_string];
    let answer = "";
    for (let i of index_list) {
        answer += my_string[i]
    }
    return answer;
}