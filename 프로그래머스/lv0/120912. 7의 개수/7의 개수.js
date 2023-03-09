function solution(array) {
    let newArr = array.join("").split("");
    let count = 0;
    for (let i of newArr) {
        i === '7' ? count++ : 0;
    }
    return count;
}